import {Project} from "../entities/entities.ts";
import {Box, Typography} from "@mui/joy";
import {ElevatedBox} from "../../../utils/components/container/ElevatedBox.tsx";
import dayjs from "dayjs";

export const ProjectCard = (props: Project) => (
    <ElevatedBox
        sx={{
            p: 1,
            borderRight: `8px solid ${props.color}`,
            backgroundColor: "background.surface",
        }}
    >
        <Box
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Typography level={"body-md"}>
                    {props.name}
                </Typography>
                <Typography level={"body-sm"}>
                    {props.description}
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "end",
                    justifyContent: "space-between",
                }}
            >
                <Typography level={"body-sm"}>
                    {dayjs(props.createdAt).format("DD/MM/YYYY")}
                </Typography>
                <Typography level={"body-sm"}>
                    {props.owner.username}
                </Typography>
            </Box>
        </Box>
    </ElevatedBox>
)