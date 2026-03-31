import {User} from "../../auth/entities/auth.ts";

export interface CreateProject {
    uuid?: string
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