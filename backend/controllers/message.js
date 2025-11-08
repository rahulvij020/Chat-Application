import User from "../models/user.js";
import Message from "../models/message.js";
import { isValidObjectId } from "mongoose";

export const sendMessage = async (req, res) => {
    try {
        const { id: receiverId } = req.params;
        if(!isValidObjectId(receiverId)) {
            return res.status(400).json({ message: "Invalid receiver" });
        }
    } catch (error) {

    }
};

export const getMessages = async (req, res) => {
    try {
    } catch (error) {
    }
};

export const getAllUsers = async (req, res) => {
    try {
    } catch (error) {
    }
};

export const deleteMessage = async (req, res) => {
    try {
    } catch (error) {
    }
};