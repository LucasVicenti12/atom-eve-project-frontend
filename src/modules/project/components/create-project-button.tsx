import {Fragment, useState} from "react";
import {Dialog} from "../../../utils/components/container/dialog.tsx";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import {Box, Button, Typography} from "@mui/joy";
import {useTranslation} from "react-i18next";
import {ProjectForm} from "./project-form.tsx";
import {EveContainer} from "../../../utils/components/container/eve-container.tsx";
import AddToQueueRoundedIcon from "@mui/icons-material/AddToQueueRounded";

export const CreateProjectButton = () => {
    const {t} = useTranslation()
    const [open, setOpen] = useState(false)

    return (
        <Fragment>
            <Button
                startDecorator={<AddRoundedIcon/>}
                onClick={() => {
                    setOpen(true)
                }}
            >
                {t("home.action.do_new_project")}
            </Button>
            {
                open && (
                    <Dialog
                        open={open}
                        onClose={() => setOpen(false)}
                    >
                        <EveContainer>
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
                                    <Typography color={"neutral"} fontWeight={"bold"}>
                                        {t("project.label.title")}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{mt: 2}}/>
                            <ProjectForm cancel={() => setOpen(false)}/>
                        </EveContainer>
                    </Dialog>
                )
            }
        </Fragment>
    )
}