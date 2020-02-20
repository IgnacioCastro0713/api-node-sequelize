import Joi from '@hapi/joi';

export const createSchema = Joi.object({
  name: Joi
    .string()
    .required()
    .messages({
      'string.base': 'Nombre debe ser un texto',
      'any.required': 'Nombre es requerido'
    }),

  priority: Joi
    .number()
    .required()
    .messages({
      'number.base': 'Prioridad debe ser tipo numero',
      'any.required': 'Prioridad es requerido'
    }),

  description: Joi
    .string()
    .required()
    .messages({
      'string.base': 'Descripción debe ser un texto',
      'any.required': 'Descripción es requerido'
    }),

  delivery_date: Joi
    .date()
    .required()
    .messages({
      'date.base': 'Fecha de entrega debe ser una fecha valida',
      'any.required': 'Fecha de entrega es requerido'
    }),

  user_id: Joi
    .number()
    .required()
    .messages({
      'number.base': 'id de usuario debe ser tipo numero',
      'any.required': 'id de usuario es requerido'
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

  priority: Joi
    .number()
    .required()
    .messages({
      'number.base': 'Prioridad debe ser tipo numero',
      'any.required': 'Prioridad es requerido'
    }),

  description: Joi
    .string()
    .required()
    .messages({
      'string.base': 'Descripción debe ser un texto',
      'any.required': 'Descripción es requerido'
    }),

  delivery_date: Joi
    .date()
    .required()
    .messages({
      'date.base': 'Fecha de entrega debe ser una fecha valida',
      'any.required': 'Fecha de entrega es requerido'
    }),
});
