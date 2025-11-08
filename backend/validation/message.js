import Joi from "joi";

export const sendMessageValidation = (data) => {
    const schema = Joi.object({
        content: Joi.string().min(1).required(),
    });
    return schema.validate(data, { abortEarly: false });
}