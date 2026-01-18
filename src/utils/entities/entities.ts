export interface ApiError {
    code: string
    message?: string
}

export interface ApiResponse<T> {
    data?: T
    error?: ApiError
}

export const UserToken = "user-token"