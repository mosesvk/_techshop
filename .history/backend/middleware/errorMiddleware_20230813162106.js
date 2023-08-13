const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalURL}`)
    req.status(404)
    next(error)
}