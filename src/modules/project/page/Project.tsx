import ProjectLoader from "../loader/ProjectLoader.ts";

export const Project = () => {
    const project = ProjectLoader.UseData()

    console.log(project)

    return (
        <div>
            {project.name}
        </div>
    )
}