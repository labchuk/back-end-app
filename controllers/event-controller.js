const eventService = require('../service/event-service')


class eventController {
    async getEvents(req,res,next) {
        try {
            const events = await eventService.getAllEvents()
            return res.json(events)
        } catch (e) {
            next(e)
        }
    }

    async createEvent(req,res,next) {
        try {
            const {name,description, dateStart,dateEnd, registrationDateStart, registrationDateEnd, address} = req.body
            const event = await eventService.createNewEvent(name,description,dateStart,dateEnd,registrationDateStart,registrationDateEnd,address)
            return res.json(event)
        } catch (e) {
            next(e)
        }
    }

    async deleteEvent(req,res,next) {
        try {
            const {id} = req.body
            const event = await eventService.deleteEvent(id)
            return res.json(event)
        } catch (e) {
            next(e)
        }
    }

    async updateEvent(req,res,next) {
        try {
            const eventData = req.body
            const {id} = req.body
            const event = await eventService.updateEvent(eventData,id)
            return res.json(event)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new eventController()
