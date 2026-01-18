import {createContext} from "react";
import {Login, Register, Token, User} from "../entities/entities.ts";
import {ApiResponse} from "../../../utils/entities/entities.ts";

export interface AuthContextProps {
    user: User | null
    loading: boolean
    authenticated: boolean
    login: (login: Login) => Promise<ApiResponse<Token>>
    register: (register: Register) => Promise<ApiResponse<User>>
    logout: () => Promise<ApiResponse<void>>
}

export const AuthContext = createContext<AuthContextProps | null>(
    null
)