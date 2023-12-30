export const errHandeler = (message, status, statusCode) => {
    const err = new Error()
    err.message = message
    err.status = status
    err.statusCode = statusCode
    return err
}