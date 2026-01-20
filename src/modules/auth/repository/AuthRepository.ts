import {Login, Register, Token, User} from "../entities/entities.ts";
import {handleRequest} from "../../../utils/functions/HandleAxios.ts";
import {http} from "../../../config/http/Http.ts";
import {ApiResponse} from "../../../utils/entities/entities.ts";

class AuthRepository {
    async login(login: Login): Promise<ApiResponse<Token>> {
        return handleRequest(
            http.post("/auth/login", login)
        )
    }

    async logout(): Promise<ApiResponse<void>> {
        return handleRequest(
            http.post("/auth/logout")
        )
    }

    async register(user: Register): Promise<ApiResponse<User>> {
        return handleRequest(
            http.post("/users/register", user)
        )
    }

    async me(): Promise<ApiResponse<User>> {
        return handleRequest(
            http.get("/auth/me")
        )
    }
}

export const authRepository = new AuthRepository()