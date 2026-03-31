import {Box, BoxProps} from "@mui/joy";
import LayoutData from "./data/layout-data.ts";

interface MainProps extends BoxProps {
    singlePage: boolean
}

export const Main = (props: MainProps) => (
    <Box
        component="main"
        className="Main"
        {...props}
        sx={[
            {
                p: 1,
                overflowY: "auto",
                ml: props.singlePage
                    ? undefined
                    : `${LayoutData.NavMinWidth + LayoutData.NavPadding}px`,
            },
            ...(Array.isArray(props.sx) ? props.sx : [props.sx])
        ]}
    />
)