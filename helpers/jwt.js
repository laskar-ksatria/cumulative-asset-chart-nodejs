const jwt = require('jsonwebtoken');
const SECRET_CODE = process.env.SECRET_CODE;

const generateToken = (payload) => {
    return jwt.sign(payload, SECRET_CODE);
};

const verifyToken = (token) => {
    return jwt.verify(token);
};

module.exports = { generateToken, verifyToken };