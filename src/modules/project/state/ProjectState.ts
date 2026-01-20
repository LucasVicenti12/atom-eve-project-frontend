import {atom} from "jotai";
import {loadable} from "jotai/utils";
import {projectUseCase} from "../usecase/ProjectUseCase.ts";

const Page = atom(0)

const Change = atom(false)

const Paginated = loadable(atom(async (get) => {
    const page = get(Page)

    const response = await projectUseCase.getPaginated(page, 10)

    if (!response.data) return null

    return response.data
}))

export default {
    Page,
    Change,
    Paginated,
}