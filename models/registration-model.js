const {Schema,model} = require('mongoose')

const RegSchema = new Schema({
    name: {type: String ,required: true},
    surname: {type: String,required: true },
    email: {type: String, required: true },
    userEventId: {type: String, required: true}
})

module.exports = model('Registration', RegSchema)