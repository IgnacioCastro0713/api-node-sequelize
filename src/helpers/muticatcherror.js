import { ValidationError } from "sequelize";

export const multiCatchError = e => {
  if (e instanceof ValidationError) {
    return {
      code: 400,
      message: 'Bad request',
      errors: e.errors
    }
  }

  if (e.details) {
    return {
      code: 400,
      message: 'Bad request',
      errors: e.details
    }
  }

  return {
    code: 500,
    message: 'Something goes wrong',
  }
};
