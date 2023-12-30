import { body } from 'express-validator'

function validator(filed, charSize) {
    return [
        body(filed)
            .notEmpty()
            .withMessage(`${filed} is Req`)
            .isLength({ min: charSize })
            .withMessage(`${filed} is shold be ${charSize} char`)
    ]
}

export default validator