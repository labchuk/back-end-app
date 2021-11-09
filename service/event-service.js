const EventModel = require('../models/event-model')


class EventService {
    async getAllEvents() {
        const events = await EventModel.find()
        return events
    }

    async createNewEvent(name,description,dateStart,dateEnd,registrationDateStart,registrationDateEnd, address) {
        const event = await EventModel.create({name,description,dateStart,dateEnd,registrationDateStart,registrationDateEnd,address})
        return {
            event
        }
    }
    async deleteEvent(id) {
        const event = await EventModel.deleteOne({_id:id})
        return event
    }

    async updateEvent(eventData,id) {
        const event = await EventModel.findById({_id:id})
        event.name = eventData.name
        event.description = eventData.description
        event.dateStart = eventData.dateStart
        event.dateEnd = eventData.dateEnd
        event.registrationDateStart = eventData.registrationDateStart
        event.registrationDateEnd = eventData.registrationDateEnd
        event.address = eventData.address
        return event.save()

    }
}

module.exports = new EventService()