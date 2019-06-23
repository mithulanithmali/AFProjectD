let jwt = require('../node_modules/jsonwebtoken');
let secretKey = 'system';

const AuthorizationAdminInstructor = (req, res, next) => {
    const token =
        req.body.token ||
        req.query.token ||
        req.headers['x-access-token'] ||
        req.cookies.token;

    if (!token) {
        res.status(401).send('Unauthorized: No token provided');
    } else {
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                console.log(err);
                res.status(401).send('Unauthorized: Invalid token');
            } else {
                req.Type = decoded.Type;
                let UserType = req.Type.toString();
                if(UserType === 'Instructor'|| UserType === 'Admin')
                next();
                else
                    res.status(401).send('Unauthorized: Invalid token')
            }
        });
    }
};
module.exports = AuthorizationAdminInstructor;