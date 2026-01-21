import {Project} from "../entities/entities.ts";
import {Box, Typography} from "@mui/joy";
import {ElevatedBox} from "../../../utils/components/container/ElevatedBox.tsx";
import dayjs from "dayjs";
import {useNavigate} from "react-router-dom";

export const ProjectCard = (props: Project) => {
    const nav = useNavigate()

    return (
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
                    <Typography
                        level={"body-md"}
                        sx={{
                            cursor: "pointer",
                            ":hover": {
                                textDecoration: "underline",
                            }
                        }}
                        onClick={() => nav(`/project/${props.uuid}`)}
                    >
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
}