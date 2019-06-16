const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        const token2 = req.headers.authorization.split(' ')[1];
        console.log(token2)
        const decoded = jwt.verify(token2, 'floccinaucinihilipilification');
        req.userdata = decoded;
        next();
    }
    catch (error) {
        res.send("Auth failed bro").status(401);
    }
}