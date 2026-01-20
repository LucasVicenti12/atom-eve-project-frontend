import {Login, Register, User} from "../entities/entities.ts";
import {JSX, useEffect, useState} from "react";
import {authUseCase} from "../usecase/AuthUseCase.ts";
import {AuthContext, AuthContextProps} from "./AuthContext.tsx";
import {useLocation} from "react-router-dom";

interface AuthProviderProps {
    children: JSX.Element
}

export const AuthProvider = (props: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null)

    const [authenticated, setAuthenticated] = useState(false)

    const [loading, setLoading] = useState(true)
    const location = useLocation()

    const login = async (login: Login) => {
        const response = await authUseCase.login(login)

        if(!response.error){
            setAuthenticated(true)
        }

        return response
    }

    const register = async (register: Register) => {
        return authUseCase.register(register)
    }

    const logout = async () => {
        return authUseCase.logout()
    }

    useEffect(() => {
        authUseCase.me().then((response) => {
            if (response.error) {
                setUser(null)
                setAuthenticated(false)
            } else {
                setUser(response.data as User)
                setAuthenticated(true)
            }
        }).finally(() => {
            setLoading(false)
        })
    }, [location]);

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                authenticated: !!user || authenticated,
                login,
                register,
                logout
            } as AuthContextProps}
        >
            {props.children}
        </AuthContext.Provider>
    )
}