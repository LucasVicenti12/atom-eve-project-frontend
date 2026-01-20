import {CreateProject, Project} from "../entities/entities.ts";
import {ApiResponse, Pagination} from "../../../utils/entities/entities.ts";
import {handleRequest} from "../../../utils/functions/HandleAxios.ts";
import {http} from "../../../config/http/Http.ts";

class ProjectRepository {
    async register(project: CreateProject): Promise<ApiResponse<Project>> {
        return handleRequest(
            http.post("/projects", project)
        )
    }

    async getPaginated(page: number, count: number): Promise<ApiResponse<Pagination<Project>>> {
        return handleRequest(
            http.get("/projects", {params: {count, page}})
        )
    }
}

export const projectRepository = new ProjectRepository()