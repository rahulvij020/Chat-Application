import User from '../models/user.js';
import { isValidObjectId } from 'mongoose';

export const signup = async (req, res) => {
    try {
        const body = req.body;
        const error = registerValidation(body);
        if(error){
            return res.status(400).json({ message: error.details[0].message });
        }
    } catch (error) {

    }
};

export const login = async (req, res) => {
    try {
    } catch (error) {
    }
};

export const logout = async (req, res) => {
    try {
    } catch (error) {
    }
};

export const updateProfile = async (req, res) => {
    try {
    } catch (error) {
    }
};