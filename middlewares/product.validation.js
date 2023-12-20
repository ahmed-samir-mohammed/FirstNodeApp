const { body } = require('express-validator')

function validator(filed) {
    return [
        body(filed)
            .notEmpty()
            .withMessage(`${filed} is Req`)
            .isLength({ min: 5 })
            .withMessage(`${filed} is shold be 5 char`)
    ]
}

module.exports = validator