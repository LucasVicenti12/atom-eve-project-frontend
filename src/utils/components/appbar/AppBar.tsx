import {ToggleLanguageButton} from "../../../i18n/component/ToggleLanguageButton.tsx";
import {Avatar, Box, Stack, Typography} from "@mui/joy";
import {ToggleThemeButton} from "../theme/ToggleThemeButton.tsx";
import {useAuth} from "../../../modules/auth/provider/UseAuth.ts";

export const AppBar = () => {
    const {user} = useAuth()

    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}
        >
            <Stack direction={"row"} alignItems={"center"} gap={1}>
                <Typography level={"title-lg"} color={"neutral"}>
                    Atom
                </Typography>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} gap={1}>
                <ToggleThemeButton/>
                <ToggleLanguageButton/>
                <Avatar
                    variant="outlined"
                    size="sm"
                    alt={user?.name ?? ""}
                    sx={{
                        cursor: "pointer"
                    }}
                />
            </Stack>
        </Box>
    )
}