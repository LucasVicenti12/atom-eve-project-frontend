import {useContext} from "react";
import {AuthContext} from "./auth-context.tsx";

export function useAuth() {
    const context = useContext(AuthContext)

    if(context === null) {
        throw new Error("auth context is null")
    }

    return context
}