
export class CustomErrorHelper {
    
    static conflictError = (message, code = 'CONFLICT') => {
        let error = new Error()
        error.code = code
        error.httpstatusCode = 409
        error.message = message
        throw error
    }

    static notFoundError = (message, code = 'NOT_FOUND') => {
        let error = new Error()
        error.code = code
        error.httpstatusCode = 404
        error.message = message
        throw error
    }

    static badRequestError = (message, code = 'BAD_REQUEST') => {
        let error = new Error()
        error.code = code
        error.httpstatusCode = 400
        error.message = message
        throw error
    }

    static notAuthorizedError = (message, code = 'UNAUTHORIZED') => {
        let error = new Error()
        error.code = code
        error.httpstatusCode = 401
        error.message = message
        throw error
    }

    static forbiddenError = (message, code = 'FORBIDDEN') => {
        let error = new Error()
        error.code = code
        error.httpstatusCode = 403
        error.message = message
        throw error

    }

    static internalServerError = (message, code = 'INTERNAL_SERVER_ERROR') => {
        let error = new Error()
        error.code = code
        error.httpstatusCode = 500
        error.message = message
        throw error
    }

    static sendEmailError = (message= 'Error al enviar email', code = 'SEND_EMAIL_ERROR') => {
        this.internalServerError(message, code)
    }

    static schemaValidationError = (message= 'Error al validar datos') => {
        this.badRequestError(message)
    }
}