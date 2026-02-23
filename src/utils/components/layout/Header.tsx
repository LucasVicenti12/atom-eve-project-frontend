import {Box, BoxProps} from "@mui/joy";

export const Header = (props: BoxProps) => (
    <Box
        component="header"
        className="Header"
        {...props}
        sx={[
            {
                p: 1,
                gap: 2,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                gridColumn: '1 / -1',
                position: 'sticky',
                top: 0,
                zIndex: 1100,
            },
            ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
        ]}
    />
)