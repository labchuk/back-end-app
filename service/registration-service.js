const RegistrationModel = require('../models/registration-model')
const mailService = require('./mail-service')
const UserModel = require('../models/user-model')

class registrationService {
    async regOnEvent(name,surname,email,userId,adminEmail,eventId) {
        const onEvent = await RegistrationModel.create({name,surname,email,userEventId: userId+eventId})
        await mailService.sendToUser(email)
        await mailService.sendToAdmin(adminEmail,email,eventId)
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