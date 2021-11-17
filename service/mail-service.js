const nodemailer = require('nodemailer')

class MailService {

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        })
    }
    async sendToUser(email) {
        await this.transporter.sendMail({
            from: "alextestprojectexadel@gmail.com",
            to: email,
            subject: "Event registration",
            text: '',
            html: `
                <div>
                    <h3>You have successfully registered for the event!</h3>               
                </div> 
            `
        })
    }
    async sendToAdmin(email,emailUser,eventId) {
        await this.transporter.sendMail({
            from: "alextestprojectexadel@gmail.com",
            to: email,
            subject: "Event registration",
            text: '',
            html: `
                <div>
                    <h3>User with this ${emailUser} email was registered this ${eventId} event</h3>               
                </div> 
            `
        })
    }
}

module.exports = new MailService()