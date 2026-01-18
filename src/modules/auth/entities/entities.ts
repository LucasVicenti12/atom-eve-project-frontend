export interface Login {
    username: string
    password: string
}

export interface Token {
    token: string
    expiration: number
}

export interface Register {
    username: string
    password: string
    name: string
    email: string
}

export interface User {
    uuid: string
    username: string
    password: string
    name: string
    email: string
    status: string
    createdAt: string
    modifiedAt: string
}

export enum AuthErrors {
    USERNAME_IS_EMPTY = "USERNAME_IS_EMPTY",
    PASSWORD_IS_EMPTY = "PASSWORD_IS_EMPTY",
    NAME_IS_EMPTY = "NAME_IS_EMPTY",
    EMAIL_IS_EMPTY = "EMAIL_IS_EMPTY"
}