import {Server} from "socket.io";
import http from "http";
import express from "express";
import { socketMiddleware } from "../middlewares/socket.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: process.env.FRONTEND_URL,
        credentials: true,
    },
});

io.use(socketMiddleware);

export const getReceiverSocketId = (userId) => {
    return userSocketMap[userId];
}

const userSocketMap = {};

io.on("connection", (socket) => {
    console.log(`User connected: ${socket.user.name}`);
    const userId = socket.userId;
    userSocketMap[userId] = socket.id;
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
    socket.on("disconnect", () => {
        console.log(`User disconnected: ${socket.user.name}`);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
});

export { io, app, server };