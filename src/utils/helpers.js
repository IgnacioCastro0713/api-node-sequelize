import {ValidationError} from "sequelize";

export function multiCatchError(e) {
  if (e instanceof ValidationError) {
	return {
	  code: 400,
	  message: 'Bad request',
	  errors: e.errors
	}
  }

  return {
    code: 500,
	message: 'Something goes wrong',
  }
}
