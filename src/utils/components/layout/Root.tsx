import {Box, BoxProps} from "@mui/joy";
import LayoutData from "./data/LayoutData.ts";

export const Root = (props: BoxProps) => (
    <Box
        {...props}
        sx={[
            {
                display: 'grid',
                gridTemplateColumns: "1fr",
                gridTemplateRows: `${LayoutData.AppBarHeight}px 1fr`,
                minHeight: '100vh',
                maxHeight: '100vh',
                bgcolor: (theme) => theme.palette.background.body,
                position: "relative"
            },
            ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
        ]}
    >
        {props.children}
    </Box>
)