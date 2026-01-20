import {atom} from "jotai";
import {loadable} from "jotai/utils";
import {projectUseCase} from "../usecase/ProjectUseCase.ts";

const Change = atom(false)

const PageAll = atom(0)

const PaginatedAll = loadable(atom(async (get) => {
    const page = get(PageAll)

    const response = await projectUseCase.getPaginated(page, 10, true)

    if (!response.data) return null

    return response.data
}))

const PageMine = atom(0)

const PaginatedMine = loadable(atom(async (get) => {
    const page = get(PageMine)

    const response = await projectUseCase.getPaginated(page, 10, false)

    if (!response.data) return null

    return response.data
}))

export default {
    Change,
    PageAll,
    PaginatedAll,
    PageMine,
    PaginatedMine
}