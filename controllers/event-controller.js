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
    async getEventById(req,res,next) {
        try {
            const {id} = req.params
            const event = await eventService.getEvent(id)
            return res.json(event)
        } catch (e) {
            next(e)
        }
    }

    async createEvent(req,res,next) {
        try {
            const {name,description, date, dateReg, address,lat,lng} = req.body
            const event = await eventService.createNewEvent(name,description, date, dateReg, address,lat,lng)
            return res.json(event)
        } catch (e) {
            next(e)
        }
    }

    async deleteEvent(req,res,next) {
        try {
            const {id} = req.body
            console.log(id)
            const event = await eventService.deleteEvent(id)
            return res.json(event)
        } catch (e) {
            next(e)
        }
    }

    async updateEvent(req,res,next) {
        try {
            const {name,description, date, dateReg, address,id} = req.body
            console.log(name)
            console.log(description)
            const event = await eventService.updateEvent(name,description, date, dateReg, address,id)
            return res.json(event)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new eventController()
