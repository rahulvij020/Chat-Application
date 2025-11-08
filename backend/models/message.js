import { Schema, model } from 'mongoose';

const schema = new Schema({
    sender: { type: Schema.Types.ObjectId, ref: 'User' },
    receiver: { type: Schema.Types.ObjectId, ref: 'User' },
    content: { type: String },
    image: { type: String, default: undefined },
    read: { type: Boolean, default: false },
    deleted: { type: Boolean, default: false }
}, { timestamps: true, versionKey: false });

const Message = model('Message', schema);
export default Message;