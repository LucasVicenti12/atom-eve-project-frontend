import {LoaderFunctionArgs, redirect, useRouteLoaderData} from "react-router-dom";
import {projectUseCase} from "../usecase/ProjectUseCase.ts";
import {Project} from "../entities/entities.ts";
import {http} from "../../../config/http/Http.ts";
import {InternalAxiosRequestConfig} from "axios";

const ID = "project-detail"

async function Loader(props: LoaderFunctionArgs) {
    console.log({props})

    const uuid = "cf8175ca-e53c-46e8-84b1-f073ccb87c8d"

    const teste = http.defaults.headers.common["Project-UUID"]

    console.log({teste, t: http.defaults.headers})

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