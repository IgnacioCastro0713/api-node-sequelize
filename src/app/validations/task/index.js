import Joi from '@hapi/joi';

export const createSchema = Joi.object({
  name: Joi
    .string()
    .required()
    .messages({
      'string.base': 'Nombre debe ser un texto',
      'any.required': 'Nombre es requerido'
    }),

  done: Joi
    .boolean()
    .required()
    .messages({
      'string.base': 'Done debe ser un booleano',
      'any.required': 'Done es requerido'
    }),

  project_id: Joi
    .number()
    .required()
    .messages({
      'number.base': 'id del proyecto debe ser tipo numero',
      'any.required': 'id del proyecto es requerido'
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

  done: Joi
    .boolean()
    .required()
    .messages({
      'string.base': 'Done debe ser un booleano',
      'any.required': 'Done es requerido'
    }),

  project_id: Joi
    .number()
    .required()
    .messages({
      'number.base': 'id del proyecto debe ser tipo numero',
      'any.required': 'id del proyecto es requerido'
    }),
});
