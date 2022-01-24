const expressJwt = require('express-jwt')
const secret  = "62cb5757449177f69896654ee30d330a" //SHA256

function jwt() {
    return expressJwt({ secret, algorithms: ['HS256'] }).unless({
        path: [
            //public routes that do NOT require authentication (Unauthorization)
            '/api/user/login',
            '/api/user/register'
        ]
    });
}

module.exports = jwt;

