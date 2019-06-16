const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        console.log(token)
        const decoded = jwt.verify(token, 'supercalifragilisticexpialidocious');
        req.userdata = decoded;
        next();
    }
    catch (error) {
        res.send("Auth failed bro").status(401);
    }
}