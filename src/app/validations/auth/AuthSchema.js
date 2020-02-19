import Joi from '@hapi/joi';

export const loginSchema = Joi.object({
  email: Joi
    .string()
    .email()
    .required()
    .messages({
      'string.base': `correo debe se tipo texto`,
      'string.email': `correo debe ser un correo valido`,
      'any.required': `correo es requerido`,
    }),

  password: Joi
    .string()
    .required()
    .messages({
      'string.base': `contraseña debe se tipo texto`,
      'any.required': `contraseña es requerida`,
    })

});

export const registerSchema = Joi.object({
  name: Joi
    .string()
    .required(),

  email: Joi
    .string()
    .email()
    .required(),

  password: Joi
    .string()
    .required()
});