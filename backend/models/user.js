import { Schema, model } from "mongoose";

const schema = new Schema({
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    avatar: { type: String, default: undefined }
}, { timestamps: true, versionKey: false });

schema.index({ name: 1, email: 1 }, { unique: true });

const User = model('User', schema);
export default User;