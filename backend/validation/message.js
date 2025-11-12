import Joi from "joi";

export const sendMessageValidation = (data) => {
    const schema = Joi.object({
        content: Joi.string().min(1).required(),
        image: Joi.string().pattern(/^data:image\/[a-zA-Z]+;base64,/).allow('').optional()
    });
    return schema.validate(data, { abortEarly: false });
}