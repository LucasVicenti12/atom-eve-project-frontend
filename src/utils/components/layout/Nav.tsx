import {Box, BoxProps} from "@mui/joy";
import LayoutState from "./state/LayoutState.ts";
import {useAtom} from "jotai";
import LayoutData from "./data/LayoutData.ts";

export const Nav = (props: BoxProps) => {
    const [open, setOpen] = useAtom(LayoutState.NavOpen);

    return (
        <Box
            component="nav"
            className="Navigation"
            {...props}
            sx={[
                {
                    p: `${LayoutData.NavPadding}px`,
                    pt: 1,
                    display: {
                        sm: 'initial',
                    },
                    minWidth: open ? `100%` : `${LayoutData.NavMinWidth}px`,
                    maxWidth: open ? `100%` : `${LayoutData.NavMinWidth}px`,
                    top: `${LayoutData.AppBarHeight}px`,
                    height: `calc(100% - ${LayoutData.AppBarHeight}px)`,
                    position: "absolute",
                    transition: "all 200ms linear",
                    backdropFilter: open ? "blur(5px)" : undefined,
                    zIndex: 10
                },
                ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
            ]}
            onClick={() => {
                setOpen(false)
            }}
        >
            <div
                style={{
                    width: open ? `${LayoutData.NavMaxWidth}px` : `${LayoutData.NavMinWidth}px`,
                    transition: "all 200ms linear",
                    height: "100%",
                }}
                onClick={(evt) => evt.stopPropagation()}
            >
                {props.children}
            </div>
        </Box>
    )
}