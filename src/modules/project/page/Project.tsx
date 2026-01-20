import {CenteredPage} from "../../../utils/components/container/CenteredPage.tsx";
import {Box, Typography} from "@mui/joy";
import {useTranslation} from "react-i18next";

import AddToQueueRoundedIcon from '@mui/icons-material/AddToQueueRounded';
import {ProjectForm} from "../components/ProjectForm.tsx";
import {ElevatedBox} from "../../../utils/components/container/ElevatedBox.tsx";

export const Project = () => {
    const {t} = useTranslation()

    return (
        <CenteredPage>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 1.5
                    }}
                >
                    <AddToQueueRoundedIcon sx={{fontSize: "1.5rem"}}/>
                    <Typography level={"h3"} color={"neutral"} fontWeight={"bold"}>
                        {t("project.label.title")}
                    </Typography>
                </Box>
            </Box>
            <Box sx={{mt: 2}}/>
            <ElevatedBox
                sx={{
                    p: 1,
                    backgroundColor: "background.surface",
                }}
            >
                <ProjectForm/>
            </ElevatedBox>
        </CenteredPage>
    )
}