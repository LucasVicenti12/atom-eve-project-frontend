import {Box, Stack, Tooltip, Typography} from "@mui/joy";
import {useCurrentRoute, useRoutes} from "../../config/router/routes/useRoutes.tsx";
import {useNavigate} from "react-router";
import {isValidElement} from "react";
import {ToggleLanguageButton} from "../../i18n/component/ToggleLanguageButton.tsx";
import {EveRoute} from "../../utils/entities/entities.ts";

export const EveAppBar = () => {
    const routes = useRoutes()

    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <Stack direction={"row"} alignItems={"center"} gap={1}>
                <Typography level={"body-md"} fontWeight={"bold"}>
                    Eve
                </Typography>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} gap={1}>
                {
                    routes.filter(x => x.appBar).map((r, i) => (
                        <EveAppBarOption
                            key={`crm_app_bar_option_${i}`}
                            {...r}
                        />
                    ))
                }
            </Stack>
            <Stack direction={"row"} alignItems={"center"} gap={1}>
                <ToggleLanguageButton/>
            </Stack>
        </Box>
    )
}

const EveAppBarOption = (props: EveRoute) => {
    const nav = useNavigate()
    const current = useCurrentRoute()

    const handleNavigate = () => {
        let path = `/${props.path}`

        if (isValidElement(props.children)) {
            nav(path)
            return
        }

        const index = props.children?.filter(x => x.index)?.[0]

        if (index && index.path) {
            path = `${path}/${index.path}`
        }

        nav(path)
    }

    return (
        <Tooltip title={props.label} size={"sm"}>
            <Box
                sx={{
                    px: 2.5,
                    py: 0.5,
                    backgroundColor: (theme) => theme.palette.colorScheme === "light" ? "#FFFFFFb3" : "#000000b3",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    boxShadow: current.path === props.path ? "0 2px 8px rgba(0,0,0,0.1)" : "none",
                    border: current.path === props.path ? "2px solid #D4D4D4" : "2px solid transparent",
                    borderRadius: "8px",
                    ":hover": {backgroundColor: "#ffffffe6"},
                    transition: "all 200ms linear"
                }}
                onClick={handleNavigate}
            >
                <Typography
                    level={"body-sm"}
                    fontWeight={"bold"}
                >
                    {props.label}
                </Typography>
            </Box>
        </Tooltip>
    )
}