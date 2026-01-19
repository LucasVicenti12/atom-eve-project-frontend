import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {AuthProvider} from "../../modules/auth/provider/AuthProvider.tsx";
import {Page} from "../../utils/default/Page.tsx";
import {Login} from "../../modules/auth/page/Login.tsx";
import {Home} from "../../modules/home/page/Home.tsx";
import {Middleware} from "../../modules/auth/provider/Middleware.tsx";
import {Register} from "../../modules/auth/page/Register.tsx";

export const Root = () => {
    const routes = createBrowserRouter(
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
                children: [
                    {
                        path: "/home",
                        element: <Home/>,
                    }
                ]
            }
        ], {
            basename: "/app"
        }
    );

    return (
        <RouterProvider router={routes}/>
    )
}