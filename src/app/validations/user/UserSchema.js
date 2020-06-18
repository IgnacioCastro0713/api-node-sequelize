import Joi from '@hapi/joi';

export const createSchema = Joi.object({
  name: Joi
    .string()
    .required()
    .messages({
      'string.base': 'Nombre debe ser un texto',
      'any.required': 'Nombre es requerido'
    }),
  email: Joi
    .string()
    .required()
    .email()
    .messages({
      'string.base': 'Email debe ser un texto',
      'any.required': 'Email es requerido',
      'string.email': 'Deber ser un email valido'
    }),
  password: Joi
    .string()
    .required()
    .messages({
      'string.base': 'Nombre debe ser un texto',
      'any.required': 'Nombre es requerido'
    }),
});

export const updateSchema = Joi.object({
  name: Joi
    .string()
    .required()
    .messages({
      'string.base': 'Nombre debe ser un texto',
      'any.required': 'Nombre es requerido'
    }),
  email: Joi
    .string()
    .required()
    .email()
    .messages({
      'string.base': 'Email debe ser un texto',
      'any.required': 'Email es requerido',
      'string.email': 'Deber ser un email valido'
    }),
  password: Joi
    .string()
    .required()
    .messages({
      'string.base': 'Nombre debe ser un texto',
      'any.required': 'Nombre es requerido'
    }),
});