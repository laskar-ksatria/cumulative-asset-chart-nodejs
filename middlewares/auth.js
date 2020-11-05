const { verifyToken } = require('../helpers/jwt')

const UserAuth = (req,res,next) => {
    let token = req.headers.charttoken;
    if (token) {
        let decoded = verifyToken(token);
        next();
    }else {
        next({message: "You must login first as user"})
    }
};

module.exports = { UserAuth }