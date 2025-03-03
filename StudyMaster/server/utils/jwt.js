const jwt = require('jsonwebtoken');

function sign(option) {
    return jwt.sign(option, 'ahhhh', { expiresIn: 86400 }); // 一天
}

// 解析token
function verify() {
    return async(ctx, next) => {
        let token = ctx.request.headers.authorization
        if (token) {
            // 校验
            try {
                const decoded = jwt.verify(token, 'ahhhh');
                // console.log(decoded);

                if (decoded.id) { // 合法的 token
                    ctx.user_id = decoded.id
                    await next()
                }
            } catch (err) {
                ctx.body = {
                    code: 401,
                    msg: 'token过期'
                }
            }
        }
    }
}

module.exports = {
    sign,
    verify
}