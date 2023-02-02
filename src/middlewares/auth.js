const jwt = require('jsonwebtoken');
const auth = (req, res, next) => {
    try {
        let token = req.headers.authorization;
        if (token) {
            token = token.split(" ")[1];
            let user = jwt.verify(token, process.env.SECRET_KEY);
            req.userId = user.id;
        }
        else {
           return res.status(401).json({ message: 'Unauthorized user', status:401 })
        }
        next();
    } catch (err) {
        res.status(401).json({ message: 'Unauthorized user', status:401})
    }
}

module.exports = auth;