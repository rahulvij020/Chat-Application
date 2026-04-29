import Joi from "joi";

export const sendMessageValidation = (data) => {
    const schema = Joi.object({
        content: Joi.string().optional().allow(''),
        image: Joi.any().optional()
    }).or('content', 'image');
    return schema.validate(data, { abortEarly: false });
}