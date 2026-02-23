import {useCurrentRoute} from "../../config/router/routes/useRoutes.tsx";
import {ElevatedBox} from "../../utils/components/container/ElevatedBox.tsx";
import {isValidElement} from "react";
import {Box, Button, Divider, IconButton, List, ListItem, ListItemButton, ListItemContent, Typography} from "@mui/joy";
import {useAtom, useAtomValue} from "jotai";
import LayoutState from "../../utils/components/layout/state/LayoutState.ts";

import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import {EveRoute} from "../../utils/entities/entities.ts";
import {useLocation, useNavigate} from "react-router";
import {useAuth} from "../../modules/auth/provider/UseAuth.ts";
import {popup} from "../../utils/alerts/Popup.ts";

export const EveNavBar = () => {
    const {logout} = useAuth()

    const [open, setOpen] = useAtom(LayoutState.NavOpen);

    const current = useCurrentRoute()

    if (isValidElement(current.children)) return

    const handleConfirmLogout = () => {
        popup.confirm("question", "Sair", "Deseja sair da sua conta?", "Sim").then((result) => {
            if (result.isConfirmed) {
                logout().then()
            }
        })
    }

    return (
        <ElevatedBox
            sx={{
                minHeight: "100%",
                backgroundColor: (theme) => theme.palette.colorScheme === "light" ? "#FFFFFFb3" : "#000000b3",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                overflow: "hidden"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: open ? "space-between" : "center",
                    alignItems: "center",
                    p: 1,
                }}
            >
                {
                    open && (
                        <Typography
                            level="title-sm"
                            fontWeight={"bold"}
                            sx={{
                                textWrap: "nowrap",
                            }}
                        >
                            CRM
                        </Typography>
                    )
                }
                <IconButton
                    variant={open ? "solid" : "plain"}
                    color={open ? "primary" : "neutral"}
                    size={"sm"}
                    onClick={() => {
                        setOpen(prev => !prev)
                    }}
                >
                    <ExpandMoreRoundedIcon
                        sx={{
                            transform: open ? "rotate(90deg)" : "rotate(-90deg)",
                            transition: "all 200ms linear",
                        }}
                    />
                </IconButton>
            </Box>
            <Divider/>
            <List
                size="sm"
                sx={{
                    gap: 0,
                    p: 1,
                    '--List-nestedInsetStart': '30px',
                    '--ListItem-radius': (theme) => theme.vars.radius.sm
                }}
            >
                {
                    current.children?.map((x, i) => (
                        <EveNavBarOption
                            key={`crm_nav_bar_option_${i}`}
                            basePath={current.path}
                            {...x}
                        />
                    ))
                }
            </List>
            <Divider/>
            {
                open ? (
                    <Button
                        variant={"plain"}
                        startDecorator={<LogoutRoundedIcon/>}
                        sx={{
                            borderRadius: "0px"
                        }}
                        onClick={() => {
                            handleConfirmLogout()
                        }}
                    >
                        Sair
                    </Button>
                ) : (
                    <IconButton
                        variant={"plain"}
                        color={"neutral"}
                        size={"sm"}
                        onClick={() => {
                            handleConfirmLogout()
                        }}
                        sx={{
                            borderRadius: "0px"
                        }}
                    >
                        <LogoutRoundedIcon/>
                    </IconButton>
                )
            }
        </ElevatedBox>
    )
}

interface CrmNavBarOptionProps extends EveRoute {
    basePath: string
}

const EveNavBarOption = (props: CrmNavBarOptionProps) => {
    const nav = useNavigate()
    const location = useLocation()

    const pathname = location.pathname

    const open = useAtomValue(LayoutState.NavOpen)

    const Icon = props.icon!

    const subpath = props.path ? `/${props.basePath}/${props.path}` : `/${props.basePath}`

    const isCurrent = pathname === subpath

    return (
        <ListItem onClick={() => nav(subpath)}>
            {
                open ? (
                    <ListItemButton
                        sx={{height: "40px"}}
                        color={isCurrent ? "primary" : "neutral"}
                        variant={isCurrent ? "soft" : "plain"}
                    >
                        <Icon
                            fontSize={"small"}
                            color={isCurrent ? "primary" : "inherit"}
                        />
                        <ListItemContent>
                            <Typography
                                level="title-sm"
                                color={isCurrent ? "primary" : "neutral"}
                                sx={{
                                    textWrap: "nowrap",
                                }}
                            >
                                {props.label}
                            </Typography>
                        </ListItemContent>
                    </ListItemButton>
                ) : (
                    <ListItemButton
                        color={isCurrent ? "primary" : "neutral"}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            height: "40px",
                            aspectRatio: "1 / 1"
                        }}
                    >
                        <Icon
                            fontSize={"small"}
                            color={isCurrent ? "primary" : "inherit"}
                        />
                    </ListItemButton>
                )
            }
        </ListItem>
    )
}