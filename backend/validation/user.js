import Joi from 'joi';

export const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data, { abortEarly: false });
}

export const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data, { abortEarly: false });
}

// export const updateProfileValidation = (data) => {
//     const schema = Joi.object({
//         name: Joi.string().min(3).max(30).optional(),
//         email: Joi.string().email().optional(),
//     });
//     return schema.validate(data, { abortEarly: false });
// }