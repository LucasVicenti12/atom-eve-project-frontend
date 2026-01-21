import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {AuthProvider} from "../../modules/auth/provider/AuthProvider.tsx";
import {Page} from "../../utils/default/Page.tsx";
import {Login} from "../../modules/auth/page/Login.tsx";
import {Home} from "../../modules/home/page/Home.tsx";
import {Middleware} from "../../modules/auth/provider/Middleware.tsx";
import {Register} from "../../modules/auth/page/Register.tsx";
import {NewProject} from "../../modules/project/page/NewProject.tsx";
import {Project} from "../../modules/project/page/Project.tsx";
import ProjectLoader from "../../modules/project/loader/ProjectLoader.ts";

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
                        path: "/new-project",
                        element: <NewProject/>
                    },
                    {
                        path: "/project/:uuid",
                        element: <Project/>,
                        id: ProjectLoader.ID,
                        loader: ProjectLoader.Loader,
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