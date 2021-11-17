const EventModel = require('../models/event-model')


class EventService {
    async getAllEvents() {
        const events = await EventModel.find()
        return events
    }
    async getEvent(id) {
        const event = await EventModel.findById({_id:id})
        return event
    }

    async createNewEvent(adminEmail,name,description,date, dateReg, address,lat,lng) {
        const event = await EventModel.create({adminEmail,name,description, date, dateReg, address,lat,lng})
        return {
            event
        }
    }
    async deleteEvent(id) {
        const event = await EventModel.deleteOne({_id:id})
        return event
    }

    async updateEvent(adminEmail,name,description, date, dateReg, address,id,lat,lng) {
        const event = await EventModel.findById({_id:id})
        event.adminEmail = adminEmail
        event.name = name
        event.description = description
        event.date = date
        event.dateReg = dateReg
        event.address = address
        event.lat = lat
        event.lng = lng
        return event.save()

    }
}

module.exports = new EventService()