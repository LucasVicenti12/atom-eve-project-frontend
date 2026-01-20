import {User} from "../../auth/entities/entities.ts";

export interface CreateProject {
    name: string
    color: string
    description: string
}

export interface Project {
    uuid: string
    name: string
    description: string
    color: string
    owner: User
    members: User[]
    status: string
    createdAt: string
    modifiedAt: string
}