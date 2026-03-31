import {createBrowserRouter, RouteObject, RouterProvider} from "react-router-dom";
import {AuthProvider} from "../../modules/auth/provider/auth-provider.tsx";
import {Page} from "../../utils/default/page.tsx";
import {LoginPage} from "../../modules/auth/page/login-page.tsx";
import {AuthMiddleware} from "../../modules/auth/provider/auth-middleware.tsx";
import {RegisterPage} from "../../modules/auth/page/register-page.tsx";
import {useRoutes} from "./use-routes.tsx";
import {EveRoute} from "../../utils/entities/utils.ts";
import {isValidElement} from "react";

export const Root = () => {
    const routes = useRoutes()

    const handleRoute = (route: EveRoute): RouteObject => {
        if (isValidElement(route.children)) {
            return {
                id: route.id,
                path: route.path,
                loader: route.loader,
                element: route.children
            }
        } else {
            return {
                id: route.id,
                path: route.path,
                loader: route.loader,
                children: route.children!.map((x: EveRoute) => handleRoute(x))
            }
        }
    }

    const router = createBrowserRouter(
        [
            {
                path: "/login",
                element: (
                    <AuthProvider>
                        <LoginPage/>
                    </AuthProvider>
                ),
            },
            {
                path: "/register",
                element: (
                    <AuthProvider>
                        <RegisterPage/>
                    </AuthProvider>
                ),
            },
            {
                path: "/",
                element: (
                    <AuthProvider>
                        <AuthMiddleware>
                            <Page/>
                        </AuthMiddleware>
                    </AuthProvider>
                ),
                children: routes.map((x: EveRoute) => handleRoute(x))
            }
        ], {
            basename: "/app"
        }
    );

    return (
        <RouterProvider router={router}/>
    )
}