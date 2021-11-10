const {Schema,model} = require('mongoose')

const EventSchema = new Schema({
    name: {type: String ,required: true},
    description: {type: String },
    date: {type: Array },
    dateReg: {type: Array },
    address: {type: String}
})

module.exports = model('Event', EventSchema)