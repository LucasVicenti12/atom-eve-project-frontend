import {Outlet, useParams} from "react-router-dom";
import {ProjectMenu} from "./ProjectMenu.tsx";
import Layout from "../../../utils/components/layout/Layout.tsx";
import {DefaultPage} from "../../../utils/components/container/DefaultPage.tsx";
import {useEffect} from "react";
import {http} from "../../../config/http/Http.ts";
import {InternalAxiosRequestConfig} from "axios";

export const ProjectRoot = () => {
    const params = useParams()

    useEffect(() => {
        const uuid = params.uuid

        if(!uuid) return

        const interceptor = http.interceptors.request.use((config: InternalAxiosRequestConfig) => {
            config.headers["Project-UUID"] = uuid

            return config
        })

        return () => {
            http.interceptors.request.eject(interceptor)
        }
    }, [params.uuid]);

    return (
        <DefaultPage sx={{flexDirection: "row"}}>
            <Layout.SideNav>
                <ProjectMenu/>
            </Layout.SideNav>
            <Layout.Main sx={{p: 1, flex: 1}}>
                <Outlet/>
            </Layout.Main>
        </DefaultPage>
    )
}