import ProjectLoader from "../loader/ProjectLoader.ts";

export const Project = () => {
    const project = ProjectLoader.UseData()

    return <div>{project.name}</div>
}