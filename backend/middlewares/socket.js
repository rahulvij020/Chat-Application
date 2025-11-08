import User from "../models/user.js";
import jwt from "jsonwebtoken";

export const socketMiddleware = async (socket, next) => {
    try {
        const token = socket.handshake.headers.cookie
        console.log("Socket token:", token);
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