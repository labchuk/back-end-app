const {Schema,model} = require('mongoose')

const EventSchema = new Schema({
    adminEmail: {type: String, required: true},
    name: {type: String ,required: true},
    description: {type: String },
    dateStart: {type: Date, required: true},
    dateEnd: {type: Date, required: true },
    dateRegStart: {type: Date, required: true},
    dateRegEnd: {type: Date, required: true},
    address: {type: String, required: true},
    lat: {type: Number},
    lng: {type: Number}
})

module.exports = model('Event', EventSchema)