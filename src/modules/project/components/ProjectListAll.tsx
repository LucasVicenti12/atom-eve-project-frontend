import {useAtomValue} from "jotai";
import ProjectState from "../state/ProjectState.ts";

export const ProjectListAll = () => {
    const paginated = useAtomValue(ProjectState.Paginated)

    console.log(paginated)

    return <div>LISTA</div>
}