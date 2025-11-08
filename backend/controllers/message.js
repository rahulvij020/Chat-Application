import User from "../models/user.js";
import Message from "../models/message.js";
import { isValidObjectId } from "mongoose";
import { getReceiverSocketId, io } from "../lib/socket.js";
import { sendMessageValidation } from "../validation/message.js";
import cloudinary from '../lib/cloudinary.js';

export const sendMessage = async (req, res, next) => {
    try {
        const { id: receiverId } = req.params;
        if (!isValidObjectId(receiverId)) {
            return res.status(400).json({ message: "Invalid ID" });
        }
        const receiver = await User.findOne({ _id: receiverId });
        if (!receiver) {
            return res.status(404).json({ message: "Receiver not found" });
        }
        if (receiverId.toString() === req.user._id.toString()) {
            return res.status(400).json({ message: "Cannot send message to yourself" });
        }
        const body = req.body;
        const error = sendMessageValidation(body);
        if (error) {
            return res.status(400).json({ message: error.message, error: error.details });
        }
        if (req.file) {
            const uploadedResponse = await cloudinary.uploader.upload(req.file);
            console.log(uploadedResponse);
            const image = uploadedResponse.secure_url;
        }
        const data = {
            sender: req.user._id,
            receiver: receiverId,
            content: body.content,
            image: image
        };
        const message = await Message.create(data);
        const receiverSocketId = getReceiverSocketId(receiverId.toString());
        if (receiverSocketId) {
            io.to(receiverSocketId).emit('newMessage', { message });
        }
        console.log("Receiver Socket ID:", receiverSocketId);
        return res.status(201).json({ success: true, message });
    } catch (error) {
        return next(error);
    }
};

export const getMessages = async (req, res, next) => {
    try {
        const { id: otherUserId } = req.params;
        if (!isValidObjectId(otherUserId)) {
            return res.status(400).json({ message: "Invalid ID" });
        }
        const otherUser = await User.findOne({ _id: otherUserId });
        if (!otherUser) {
            return res.status(404).json({ message: "User not found" });
        }
        const messages = await Message.find({
            $or: [
                { sender: req.user._id, receiver: otherUserId },
                { sender: otherUserId, receiver: req.user._id }
            ],
            deleted: false
        }).sort({ _id: 1 });
        return res.json({ success: true, messages });
    } catch (error) {
        next(error);
    }
};

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({ _id: { $ne: req.user._id } }).select('_id name avatar');
        return res.json(users);
    } catch (error) {
        return next(error);
    }
};

export const getAllChats = async (req, res, next) => {
    try {
        const chatPartners = await Message.aggregate([
            { $match: { $or: [{ sender: req.user._id }, { receiver: req.user._id }], deleted: false } },
            { $project: { partnerId: { $cond: [{ $eq: ["$sender", req.user._id] }, "$receiver", "$sender"] } } },
            { $group: { _id: "$partnerId" } },
            { $lookup: { from: "users", localField: "_id", foreignField: "_id", as: "user" } },
            { $unwind: "$user" },
            { $project: { _id: 0, userId: "$user._id", name: "$user.name", avatar: "$user.avatar" } }
        ]);
        return res.json({ success: true, chats: chatPartners });
    } catch (error) {
        return next(error);
    }
}

export const deleteMessage = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!isValidObjectId(id)) {
            return res.status(400).json({ message: "Invalid ID" });
        }
        const message = await Message.findOne({ _id: id });
        if (!message) {
            return res.status(404).json({ message: "Message not found" });
        }
        if (message.sender.toString() !== req.user._id.toString() && message.receiver.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: "Unauthorized" });
        }
        const updated = await Message.findOneAndUpdate({ _id: id }, { deleted: true }, { new: true });
        return res.json({ success: true, message: updated });
    } catch (error) {
        return next(error);
    }
};