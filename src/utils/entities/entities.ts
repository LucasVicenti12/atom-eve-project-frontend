export interface ApiError {
    code: string
    message?: string
}

export interface ApiResponse<T> {
    data?: T
    error?: ApiError
}

export interface Pagination<T> {
    items: T[]
    totalPages: number
    totalCount: number
    page: number
    count: number
}

export const UserToken = "user-token"