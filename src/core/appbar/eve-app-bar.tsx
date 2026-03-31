import {Box, Stack, Typography} from "@mui/joy";
import {ToggleLanguageButton} from "../../i18n/component/toggle-language-button.tsx";
import {useNavigate} from "react-router-dom";

export const EveAppBar = () => {
    const nav = useNavigate()

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
                <Typography
                    level={"body-md"}
                    fontWeight={"bold"}
                    onClick={() => nav("/home")}
                >
                    Eve
                </Typography>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} gap={1}>
                OPA
            </Stack>
            <Stack direction={"row"} alignItems={"center"} gap={1}>
                <ToggleLanguageButton/>
            </Stack>
        </Box>
    )
}