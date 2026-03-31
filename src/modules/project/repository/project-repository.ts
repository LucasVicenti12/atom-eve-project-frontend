import {CreateProject, Project} from "../entities/project.ts";
import {ApiResponse, Pagination} from "../../../utils/entities/utils.ts";
import {handleRequest} from "../../../utils/functions/handle-axios.ts";
import {http} from "../../../config/http/http.ts";

class ProjectRepository {
    async register(project: CreateProject): Promise<ApiResponse<Project>> {
        return handleRequest(
            http.post("/projects", project)
        )
    }

    async getPaginated(page: number, count: number, all: boolean): Promise<ApiResponse<Pagination<Project>>> {
        return handleRequest(
            http.get("/projects/all", {params: {count, page, all}})
        )
    }

    async getByUUID(uuid: string): Promise<ApiResponse<Project>> {
        return handleRequest(
            http.get(`/projects/uuid/${uuid}`)
        )
    }
}

export const projectRepository = new ProjectRepository()