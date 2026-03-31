import {CreateProject, Project} from "../entities/project.ts";
import {ApiResponse, Pagination} from "../../../utils/entities/utils.ts";
import {projectRepository} from "../repository/project-repository.ts";

class ProjectUseCase {
    async register(project: CreateProject): Promise<ApiResponse<CreateProject>> {
        return projectRepository.register(project)
    }

    async getPaginated(page: number, count: number, all: boolean): Promise<ApiResponse<Pagination<Project>>> {
        return projectRepository.getPaginated(page, count, all)
    }

    async getByUUID(uuid: string): Promise<ApiResponse<Project>> {
        return projectRepository.getByUUID(uuid)
    }
}

export const projectUseCase = new ProjectUseCase()