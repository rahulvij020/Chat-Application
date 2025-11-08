import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import { isValidObjectId } from 'mongoose';
import { registerValidation, loginValidation, updateProfileValidation } from '../validation/user.js';
import { generateToken } from '../utils/token.js';

export const signup = async (req, res, next) => {
    try {
        const body = req.body;
        const error = registerValidation(body);
        if (error) {
            return res.status(400).json({ message: error.message, error: error.details });
        }
        const existingUser = await User.findOne({ email: body.email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hashPassword(body.password, salt);
        const data = {
            name: body.name,
            email: body.email,
            password: hashedPassword,
        };
        const user = await User.create(data);
        const token = generateToken(user._id);
        return res.status(201).json({ success: true, token, user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export const login = async (req, res, next) => {
    try {
        const body = req.body;
        const error = loginValidation(body);
        if (error) {
            return res.status(400).json({ message: error.message, error: error.details });
        }
        const user = await User.findOne({ email: body.email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const isMatch = await bcrypt.compare(body.password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const token = generateToken(user._id);
        return res.status(200).json({ success: true, token, user });
    } catch (error) {
    }
};

export const logout = async (req, res, next) => {
    try {
        res.clearCookie('jwt');
        return res.status(200).json({ success: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export const getProfile = async (req, res, next) => {
    try {
        return res.json({ success: true, user: req.user });
    } catch (error) {
        return next(error);
    }
};

export const updateProfile = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!isValidObjectId(id)) {
            return res.status(400).json({ message: 'Invalid ID' });
        }
        const user = await User.findOne({ _id: id });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const body = req.body;
        const error = updateProfileValidation(body);
        if (error) {
            return res.status(400).json({ message: error.message, error: error.details });
        }
        if (req.file) {
            const uploadedResponse = await cloudinary.uploader.upload(req.file);
            console.log(uploadedResponse);
            body.avatar = uploadedResponse.secure_url;
        }
        console.log(body);
        const updatedUser = await User.findByIdAndUpdate(id, body, { new: true });
        return res.status(200).json({ success: true, updatedUser });
    } catch (error) {
        return next(error);
    }
};