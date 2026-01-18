import {AuthErrors, Login, Register, Token, User} from "../entities/entities.ts";
import {authRepository} from "../repository/AuthRepository.ts";
import {ApiResponse} from "../../../utils/entities/entities.ts";

class AuthUseCase {
    async login(login: Login): Promise<ApiResponse<Token>> {
        if (!login.username) {
            return {error: {code: AuthErrors.USERNAME_IS_EMPTY}}
        }
        if (!login.password) {
            return {error: {code: AuthErrors.PASSWORD_IS_EMPTY}}
        }

        return authRepository.login(login)
    }

    async logout(): Promise<ApiResponse<void>> {
        return authRepository.logout()
    }

    async register(user: Register): Promise<ApiResponse<User>> {
        if (!user.username) {
            return {error: {code: AuthErrors.USERNAME_IS_EMPTY}}
        }
        if (!user.password) {
            return {error: {code: AuthErrors.PASSWORD_IS_EMPTY}}
        }
        if (!user.name) {
            return {error: {code: AuthErrors.NAME_IS_EMPTY}}
        }
        if (!user.email) {
            return {error: {code: AuthErrors.EMAIL_IS_EMPTY}}
        }

        return authRepository.register(user)
    }

    async me(): Promise<ApiResponse<User>> {
        return authRepository.me()
    }
}

export const authUseCase = new AuthUseCase()