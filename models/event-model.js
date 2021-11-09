const {Schema,model} = require('mongoose')

const EventSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    dateStart: {type: String, required: true},
    dateEnd: {type: String, required: true},
    registrationDateStart: {type: String, required: true},
    registrationDateEnd: {type: String, required: true},
    address: {type: String, required: true}
})

module.exports = model('Event', EventSchema)