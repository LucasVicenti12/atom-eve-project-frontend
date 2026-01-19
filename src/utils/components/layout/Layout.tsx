import {Box, BoxProps, useTheme} from "@mui/joy";

const Root = (props: BoxProps) => (
    <Box
        {...props}
        sx={[
            {
                display: 'grid',
                gridTemplateColumns: "1fr",
                gridTemplateRows: '50px 1fr',
                minHeight: '100vh',
                maxHeight: '100vh',
            },
            ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
        ]}
    >
        {props.children}
    </Box>
)

const Header = (props: BoxProps) => (
    <Box
        component="header"
        className="Header"
        {...props}
        sx={[
            {
                p: 1,
                gap: 2,
                backgroundColor: 'background.surface',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                gridColumn: '1 / -1',
                borderBottom: '1px solid',
                borderColor: 'divider',
                position: 'sticky',
                top: 0,
                zIndex: 1100,
            },
            ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
        ]}
    />
)

const Main = (props: BoxProps) => {
    const theme = useTheme()

    return (
        <Box
            component="main"
            className="Main"
            {...props}
            sx={[
                {
                    p: 1,
                    backgroundImage: 'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
                    backgroundRepeat: 'no-repeat',
                    overflowY: "auto",
                    ...theme.applyStyles('dark', {
                        backgroundImage:
                            'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
                    }),
                },
                ...(Array.isArray(props.sx) ? props.sx : [props.sx])
            ]}
        />
    )
}

export default {
    Root,
    Header,
    Main
}