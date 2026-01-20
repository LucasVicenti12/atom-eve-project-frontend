import {useAuth} from "./UseAuth.ts";
import {Navigate} from "react-router-dom";
import {ReactNode} from "react";

interface MiddlewareProps {
    children: ReactNode
}

export const Middleware = (props: MiddlewareProps) => {
    const {authenticated, loading} = useAuth()

    if (loading) return

    if (!authenticated) return <Navigate to="/login"/>

    return props.children
}