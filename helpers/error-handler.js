//Unauthorization Situations:

module.exports = errorHandler;
function errorHandler(err, req, res, next) {
    if(err.name === 'UnauthorizedError'){
        return res.status(401).json({
            message: 'Token mevcut değil! Login işlemi gerekli!'
        });
    }//status 401: unauthorized (response status code indicates that the client request has not been completed because it lacks valid authentication credentials for the requested resource.)

    //default to 500 server error
    return res.status(500).json({
        message: err.message
    });
} //status 500: internal server error (server error response code indicates that the server encountered an unexpected condition that prevented it from fulfilling the request.)
