const userService = require('../service/user-service')

class userController {

    async registration (req, res,) {
        try {
            const {email,password} = req.body
            const userData = await userService.registration(email,password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 1000, httpOnly: true})
            return res.json(userData)
        } catch (e) {

        }
    }
    async login (req, res) {
        try {
            const {email,password} = req.body
            const userData = await userService.login(email,password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 1000, httpOnly: true})
            return res.json(userData)
        } catch (e) {

        }
    }
    async logout (req, res) {
        try {
            const {refreshToken} = req.cookie
            const token = await userService.logout(refreshToken)
            res.clearCookie('refreshToken')
            return res.json(token)
        } catch (e) {

        }
    }

    async refresh (req, res) {
        try {
            const {refreshToken} = req.refreshToken
            const userData = await userService.refresh(refreshToken)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 1000, httpOnly: true})
            return res.json(userData)
        } catch (e) {

        }
    }

}

module.exports = new userController()