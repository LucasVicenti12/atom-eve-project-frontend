import {Box, styled} from "@mui/joy";

export const CenteredPage = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    marginLeft: "clamp(12px, 25vw, 20%)",
    marginRight: "clamp(12px, 25vw, 20%)",
    height: "100%",
}))