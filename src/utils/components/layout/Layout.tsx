import {Box, BoxProps, IconButton, useTheme} from "@mui/joy";
import {createContext, useEffect, useState} from "react";

import KeyboardArrowLeftRounded from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRounded from "@mui/icons-material/KeyboardArrowRightRounded";

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

const SideNavContextProps: { open: boolean } = {open: true}

const SideNavContext = createContext(SideNavContextProps);

const SideNav = (props: BoxProps) => {
    const [open, setOpen] = useState(JSON.parse(localStorage.getItem("open-menu-side") ?? "true") as boolean);

    useEffect(() => {
        localStorage.setItem("open-menu-side", JSON.stringify(open))
    }, [open]);

    return (
        <SideNavContext.Provider value={{open}}>
            <Box
                component="nav"
                className="Navigation"
                {...props}
                sx={[
                    {
                        p: 1,
                        bgcolor: 'background.surface',
                        borderRight: '1px solid',
                        borderColor: 'divider',
                        display: {
                            xs: 'none',
                            sm: 'initial',
                        },
                        width: open ? "200px" : "50px",
                        position: "relative",
                        ":hover": {
                            ["& #menu-side-open-icon"]: {
                                transform: "scale(1, 1)"
                            }
                        },
                        transition: "width 200ms linear"
                    },
                    ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
                ]}
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        right: 0,
                        zIndex: 1110,
                        transform: "translate(50%, -150%)",
                    }}
                >
                    <IconButton
                        id={"menu-side-open-icon"}
                        variant={"plain"}
                        size={"sm"}
                        sx={{
                            p: 0,
                            borderRadius: "50%",
                            bgcolor: 'background.surface',
                            border: '1px solid',
                            borderColor: 'divider',
                            minWidth: "1.5rem !important",
                            minHeight: "1.5rem !important",
                            transform: "scale(0, 0)",
                            transition: "transform 100ms linear"
                        }}
                        onClick={() => setOpen(prev => !prev)}
                    >
                        {
                            open ? (
                                <KeyboardArrowLeftRounded sx={{fontSize: "13pt"}}/>
                            ) : (
                                <KeyboardArrowRightRounded sx={{fontSize: "13pt"}}/>
                            )
                        }
                    </IconButton>
                </Box>
                {props.children}
            </Box>
        </SideNavContext.Provider>
    )
}

export default {
    Root,
    Header,
    Main,
    SideNav,
    SideNavContext
}