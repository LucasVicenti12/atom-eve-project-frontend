import {Login, Register, User} from "../entities/entities.ts";
import {JSX, useEffect, useState} from "react";
import {authUseCase} from "../usecase/AuthUseCase.ts";
import {AuthContext, AuthContextProps} from "./AuthContext.tsx";
import {useNavigate} from "react-router-dom";

interface AuthProviderProps {
    children: JSX.Element
}

export const AuthProvider = (props: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    const login = async (login: Login) => {
        return authUseCase.login(login)
    }

    const register = async (register: Register) => {
        return authUseCase.register(register)
    }

    const logout = async () => {
        return authUseCase.logout()
    }

    useEffect(() => {
        authUseCase.me().then((response) => {
            if(response.error){
                setUser(null)
            }else{
                setUser(response.data as User)
            }
        }).finally(() => setLoading(false))
    }, [setUser, navigate]);

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                authenticated: !!user,
                login,
                register,
                logout
            } as AuthContextProps}
        >
            {props.children}
        </AuthContext.Provider>
    )
}