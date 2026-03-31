import {LoaderFunctionArgs, redirect, useRouteLoaderData} from "react-router-dom";
import {projectUseCase} from "../use-case/project-use-case.ts";
import {Project} from "../entities/project.ts";
import {http} from "../../../config/http/http.ts";
import {InternalAxiosRequestConfig} from "axios";

const ID = "project-detail"

async function Loader(props: LoaderFunctionArgs) {
    const uuid = props.params.uuid!

    http.interceptors.request.use((config: InternalAxiosRequestConfig) => {
        config.headers["Project-UUID"] = uuid

        return config
    })

    const response = await projectUseCase.getByUUID(uuid ?? "")

    if(response.error){
        redirect("/home")
    }

    return response.data!
}

function UseData(){
    return useRouteLoaderData(ID) as Project
}

export default {
    ID,
    Loader,
    UseData
}