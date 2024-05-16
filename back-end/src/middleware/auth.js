const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // Authorization via header
    const authHeader = req.get('Authorization');

    if (!authHeader) {
        const error = new Error('Not authenticated, no JWT');
        error.statusCode = 401;
        throw error;
    }

    // Get the token and verify it
    const token = authHeader.split(' ')[1];
    let verifiedToken;
    try {
        verifiedToken = jwt.verify(token, 'SECRETKEY');
    } catch (error) {
        error.statusCode = 500;
        throw error;
    }

    // If the token is valid but there's an error
    if (!verifiedToken) {
        const error = new Error('Not authenticated');
        error.statusCode = 401;
        throw error;
    }

    next();
}
