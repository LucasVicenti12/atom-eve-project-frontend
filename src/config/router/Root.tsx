import {createBrowserRouter, RouteObject, RouterProvider} from "react-router-dom";
import {AuthProvider} from "../../modules/auth/provider/AuthProvider.tsx";
import {Page} from "../../utils/default/Page.tsx";
import {Login} from "../../modules/auth/page/Login.tsx";
import {Middleware} from "../../modules/auth/provider/Middleware.tsx";
import {Register} from "../../modules/auth/page/Register.tsx";
import {useRoutes} from "./routes/useRoutes.tsx";
import {EveRoute} from "../../utils/entities/entities.ts";
import {isValidElement} from "react";

export const Root = () => {
    const routes = useRoutes()

    const handleRoute = (route: EveRoute, path?: string): RouteObject => {
        const subpath = path ? `${path}${route.path}` : route.path

        if (isValidElement(route.children)) {
            return {
                path: subpath,
                element: route.children
            }
        } else {
            return {
                path: subpath,
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
                        <Login/>
                    </AuthProvider>
                ),
            },
            {
                path: "/register",
                element: (
                    <AuthProvider>
                        <Register/>
                    </AuthProvider>
                ),
            },
            {
                path: "/",
                element: (
                    <AuthProvider>
                        <Middleware>
                            <Page/>
                        </Middleware>
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