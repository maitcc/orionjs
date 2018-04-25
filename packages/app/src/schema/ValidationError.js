import isArray from 'lodash/isArray'
import OrionError from '../OrionError'

const getValidationErrors = function(validationErrors) {
  const errors = {}

  for (const validationError of validationErrors) {
    errors[validationError.key] = validationError.code
  }

  return errors
}

export default class ValidationError extends OrionError {
  constructor(validationErrors) {
    if (!isArray(validationErrors)) {
      validationErrors = [validationErrors]
    }

    super('validationError', 'Validation Error')
    Error.captureStackTrace(this, this.constructor)

    this.isValidationError = true
    this.validationErrors = validationErrors

    this.getInfo = () => {
      return {
        error: 'validationError',
        message: this.message,
        validationErrors: getValidationErrors(validationErrors)
      }
    }
  }
}
