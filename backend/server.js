import authRoutes from "./routes/auth.js";
import messageRoutes from "./routes/message.js";
import { connectDB } from "./lib/db.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

// Morgan logging middleware
app.use(morgan('dev'));

const corsOptions = {
  origin: process.env.FRONTEND_URL, 
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

connectDB().then(() => {
    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => {
    console.error("Failed to connect to the database:", error);
});