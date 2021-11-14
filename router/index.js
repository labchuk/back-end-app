const Router = require('express').Router
const userController = require('../controllers/user-controller')
const eventController = require('../controllers/event-controller')
const regController = require('../controllers/registration-controller')

const router = new Router()

router.post('/login', userController.login)
router.post('/registration', userController.registration)
router.post('/logout', userController.logout)
router.get('/refresh', userController.refresh)
router.get('/events', eventController.getEvents)
router.get('/events/:id', eventController.getEventById)
router.post('/create-event', eventController.createEvent)
router.delete('/delete-event', eventController.deleteEvent)
router.put('/update-event', eventController.updateEvent)
router.post('/reg-event', regController.registrationOnEvent)
router.get('/registration-event/:id', regController.isReg)


module.exports = router

