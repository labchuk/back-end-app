const eventService = require('../service/event-service')
const {validationResult} = require('express-validator')
const ApiError = require('../exceptions/api-error')


class eventController {
    async getEvents(req,res,next) {
        try {
            const {start, end} = req.query
            const events = await eventService.getAllEvents(start,end)
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
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return next(ApiError.BadRequest('invalid data for event creation', errors.array()))
            }
            const {adminEmail,name,description,dateStart,dateEnd,dateRegStart,dateRegEnd, address,lat,lng} = req.body
            const event = await eventService.createNewEvent(adminEmail,name,description,dateStart,dateEnd,dateRegStart,dateRegEnd, address,lat,lng)
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
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return next(ApiError.BadRequest('invalid data for event updating', errors.array()))
            }
            const {adminEmail,name,description, date, dateReg, address,id,lat,lng} = req.body
            const event = await eventService.updateEvent(adminEmail,name,description, date, dateReg, address,id,lat,lng)
            return res.json(event)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new eventController()
