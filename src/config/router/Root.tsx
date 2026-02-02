import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {AuthProvider} from "../../modules/auth/provider/AuthProvider.tsx";
import {Page} from "../../utils/default/Page.tsx";
import {Login} from "../../modules/auth/page/Login.tsx";
import {Home} from "../../modules/home/page/Home.tsx";
import {Middleware} from "../../modules/auth/provider/Middleware.tsx";
import {Register} from "../../modules/auth/page/Register.tsx";
import {Project} from "../../modules/project/page/Project.tsx";
import ProjectLoader from "../../modules/project/loader/ProjectLoader.ts";
import {ProjectRoot} from "../../modules/project/components/ProjectRoot.tsx";
import {Platforms} from "../../modules/platforms/page/Platforms.tsx";

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
                    },
                    {
                        path: "/project/:uuid",
                        element: <ProjectRoot/>,
                        id: ProjectLoader.ID,
                        loader: ProjectLoader.Loader,
                        children: [
                            {
                                path: "",
                                element: <Project/>
                            },
                            {
                                path: "platforms",
                                element: <Platforms/>
                            }
                        ]
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