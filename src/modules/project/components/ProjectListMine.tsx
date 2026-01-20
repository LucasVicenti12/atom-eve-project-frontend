import {useAtomValue} from "jotai";
import ProjectState from "../state/ProjectState.ts";
import {Box} from "@mui/joy";
import {ProjectCard} from "./ProjectCard.tsx";
import {PaginationAtom} from "../../../utils/components/pagination/Pagination.tsx";

export const ProjectListMine = () => {
    const paginated = useAtomValue(ProjectState.PaginatedMine)

    switch (paginated.state) {
        case "hasError":
        case "loading":
            return
        case "hasData": {
            const list = paginated.data?.items ?? []
            const pages = paginated.data?.totalPages ?? 0

            return (
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1.5
                    }}
                >
                    {list.map((project, i) => (
                        <ProjectCard
                            key={`project_card_${i}`}
                            {...project}
                        />
                    ))}
                    <PaginationAtom page={ProjectState.PageAll} count={pages}/>
                </Box>
            )
        }
    }
}