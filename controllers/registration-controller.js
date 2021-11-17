const regService = require('../service/registration-service')

class registrationController {
    async registrationOnEvent(req,res,next) {
        try {
            const {name,surname,email,userId,adminEmail,eventId} = req.body
            const onEvent = await regService.regOnEvent(name,surname,email,userId,adminEmail,eventId)
            return res.json(onEvent)
        } catch (e) {
            next(e)
        }
    }
    async isReg(req,res,next) {
        try {
            const {id} = req.params
            const onEvent = await regService.isReg(id)
            return res.json(onEvent)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new registrationController()