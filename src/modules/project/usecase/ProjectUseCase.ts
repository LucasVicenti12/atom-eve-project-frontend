import {Project} from "../entities/entities.ts";
import {ApiResponse} from "../../../utils/entities/entities.ts";
import {projectRepository} from "../repository/ProjectRepository.ts";

class ProjectUseCase {
    async register(project: Project): Promise<ApiResponse<Project>> {
        return projectRepository.register(project)
    }
}

export const projectUseCase = new ProjectUseCase()