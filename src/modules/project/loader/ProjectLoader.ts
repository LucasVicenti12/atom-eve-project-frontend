import {LoaderFunctionArgs, redirect, useRouteLoaderData} from "react-router-dom";
import {projectUseCase} from "../usecase/ProjectUseCase.ts";
import {Project} from "../entities/entities.ts";

const ID = "project-detail"

async function Loader(props: LoaderFunctionArgs) {
    const {uuid} = props.params

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