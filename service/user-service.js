const UserModel = require('../models/user-model')
const bcrypt = require('bcrypt')
const tokenService = require('./token-service')
const UserDto = require('../dtos/user-dto')


class UserService {
    async registration (email, password) {
        const candidate = await UserModel.findOne({email})
        if (candidate) {
            throw new Error('Пользователь уже есть')
        }
        const hashPassword = await bcrypt.hash(password,3)

        const user = await UserModel.create({email,password: hashPassword})

        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        return {
            ...tokens,
            user: userDto
        }
    }

    async login (email,password) {
        const user = await UserModel.findOne({email})
        if (!user) {
            throw new Error('Пользователя нет')
        }
        const isPassEquals = await bcrypt.compare(password, user.password)

        if (!isPassEquals) {
            throw new Error('Некоректный пароль')
         }
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})

        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {
            ...tokens,
            user: userDto
        }
    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken)
        return token
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw new Error('Пользователь не авторизован')
        }
        const userData = tokenService.validateRefreshToken(refreshToken)
        const isToken = await tokenService.findToken(refreshToken)
        if (!userData || !isToken) {
            throw new Error("Пользователь не найден")
        }

        const user = await UserModel.findById(userData.id)
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})

        await tokenService.saveToken(userDto, tokens.refreshToken)
        return {...tokens, user: userDto}


    }


}

module.exports = new UserService()