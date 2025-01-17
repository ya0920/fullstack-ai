const jwt = require('jsonwebtoken');

function sign(option) {
    return jwt.sign(option, 'ahhhh', { expiresIn: 86400 }); // 一天
}

module.exports = {
    sign
}