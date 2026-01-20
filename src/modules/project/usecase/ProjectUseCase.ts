import {CreateProject, Project} from "../entities/entities.ts";
import {ApiResponse, Pagination} from "../../../utils/entities/entities.ts";
import {projectRepository} from "../repository/ProjectRepository.ts";

class ProjectUseCase {
    async register(project: CreateProject): Promise<ApiResponse<CreateProject>> {
        return projectRepository.register(project)
    }

    async getPaginated(page: number, count: number): Promise<ApiResponse<Pagination<Project>>> {
        return projectRepository.getPaginated(page, count)
    }
}

export const projectUseCase = new ProjectUseCase()