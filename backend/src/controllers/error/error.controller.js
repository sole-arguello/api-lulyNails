export const errorController = (err, req, res, next) => {
    console.log('error controller', err)
    res.status(err.httpStatusCode || 500).json({message: 'Error interno', ...err, status: 'error'})
}