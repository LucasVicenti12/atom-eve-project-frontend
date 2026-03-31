import ProjectLoader from "../loader/project-loader.ts";

export const ProjectPage = () => {
    const project = ProjectLoader.UseData()

    console.log(project)

    return (
        <div>
            {project.name}
        </div>
    )
}