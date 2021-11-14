const RegistrationModel = require('../models/registration-model')

class registrationService {
    async regOnEvent(name,surname,email,userId,eventId) {
        const onEvent = await RegistrationModel.create({name,surname,email,userEventId: userId+eventId})
        return {
            onEvent
        }
    }
    async isReg(id) {
        const onEvent = await RegistrationModel.findOne({userEventId:id})
        if(!onEvent) return {isReg:false}
        return {
            isReg:true
        }
    }
}

module.exports = new registrationService()