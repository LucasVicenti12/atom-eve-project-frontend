import {Project} from "../entities/entities.ts";
import {ApiResponse} from "../../../utils/entities/entities.ts";
import {handleRequest} from "../../../utils/functions/HandleAxios.ts";
import {http} from "../../../config/http/Http.ts";

class ProjectRepository {
    async register(project: Project): Promise<ApiResponse<Project>> {
        return handleRequest(
            http.post("/projects", project)
        )
    }
}

export const projectRepository = new ProjectRepository()