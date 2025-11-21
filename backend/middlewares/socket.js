import User from "../models/user.js";
import jwt from "jsonwebtoken";

export const socketMiddleware = async (socket, next) => {
    try {
        const cookieString = socket.handshake.headers.cookie;
        console.log("Socket cookies:", cookieString);
        
        // Parse the JWT token from the cookie string
        const token = cookieString?.split(';').find(c => c.trim().startsWith('jwt='))?.split('=')[1];
        
        if (!token) {
            return next(new Error('Authentication error: Token not provided'));
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded) {
            return next(new Error('Authentication error: Invalid token'));
        }
        const user = await User.findById(decoded.userId).select('-password');
        if (!user) {
            return next(new Error('Authentication error: User not found'));
        }
        socket.user = user;
        socket.userId = user._id.toString();
        next();
    }
    catch (error) {
        next(new Error('Authentication error'));
    }
};