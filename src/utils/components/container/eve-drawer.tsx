import {Drawer, DrawerProps} from "@mui/joy";

export const EveDrawer = (props: DrawerProps) => {
    const {
        anchor = "right",
        children,
        sx,
        ...rest
    } = props;

    return (
        <Drawer
            {...rest}
            anchor={anchor}
            disablePortal={false}
            slotProps={{
                backdrop: {
                    sx: {
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        backdropFilter: "blur(0px)",
                    }
                },
                content: {
                    sx: [
                        (theme) => ({
                            borderRadius: "lg",
                            backgroundColor: theme.palette.background.popup,
                            backdropFilter: "blur(5px)",
                            p: 2,
                            display: "flex",
                            flexDirection: "column",
                            m: 1,
                            height: "auto",
                            bottom: 1,
                            boxShadow: 'rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
                        }),
                        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
                    ],
                },
            }}
        >
            {children}
        </Drawer>
    );
};