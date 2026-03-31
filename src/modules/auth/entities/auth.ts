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
    confirmPassword: string
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
    USERNAME_IS_EMPTY = "auth.exceptions.username_is_empty",
    PASSWORD_IS_EMPTY = "auth.exceptions.password_is_empty",
    NAME_IS_EMPTY = "auth.exceptions.name_is_empty",
    EMAIL_IS_EMPTY = "auth.exceptions.email_is_empty",
    PASSWORD_DONT_MATCH = "auth.exceptions.passwords_dont_match"
}