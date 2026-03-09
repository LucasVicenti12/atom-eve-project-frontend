import type {SvgIconComponent} from "@mui/icons-material";
import {ReactElement} from "react";
import {LoaderFunctionArgs} from "react-router-dom";

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

export interface EveRoute {
    id?: string
    index?: boolean
    path: string
    label: string
    icon?: SvgIconComponent
    children?: ReactElement | EveRoute[]
    loader?: (prop: LoaderFunctionArgs) => Promise<unknown>
    appBar?: boolean
}