import Joi from "joi";

export const sendMessageValidation = Joi.object({
    content: Joi.string().min(1).required(),
})