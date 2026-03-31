import {ListItem, ListItemButton, Typography, useTheme} from "@mui/joy";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useSetAtom} from "jotai";
import LayoutState from "../../utils/components/layout/state/layout-state.ts";
import {EveRoute} from "../../utils/entities/utils.ts";

interface CrmNavBarOptionProps extends EveRoute {
    basePath: string
    simple: boolean
}

export const EveNavMenuItem = (props: CrmNavBarOptionProps) => {
    const theme = useTheme();

    const navigate = useNavigate();

    const setOpen = useSetAtom(LayoutState.NavOpen);

    const pathname = useLocation().pathname

    const parts = props.basePath.split(":")
    const paramName = parts.length > 1 ? parts[1] : null
    const params = useParams()

    const param = paramName ? params[paramName] ?? "" : ""

    const Icon = props.icon!

    const basePath = props.basePath.replace(`:${paramName}`, param)
    const subpath = props.path ? `/${basePath}/${props.path}` : `/${basePath}`

    const isCurrent = pathname === subpath

    if (props.simple) {
        return (
            <ListItemButton
                onClick={() => {
                    navigate(subpath);
                    setOpen(false);
                }}
                color={isCurrent ? "primary" : "neutral"}
                sx={(theme) => ({
                    display: "flex",
                    justifyContent: "center",
                    width: "36px",
                    height: "36px",
                    aspectRatio: "1 / 1",
                    borderRadius: "lg",
                    transition: "background-color 200ms ease",
                    "&:hover": {
                        backgroundColor: theme.palette.background.level2 + "!important",
                    },
                })}
            >
                <Icon
                    fontSize={"small"}
                    color={isCurrent ? "primary" : "inherit"}
                />
            </ListItemButton>
        )
    }

    return (
        <ListItem
            onClick={() => {
                navigate(subpath);
                setOpen(false);
            }}
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                p: 1,
                borderRadius: "lg",
                cursor: "pointer",
                transition: "all 100ms linear",
                userSelect: "none",
                backgroundColor: isCurrent ? theme.palette.primary[100] : "transparent",
                "&:hover": {
                    backgroundColor: isCurrent ? theme.palette.primary[100] : theme.palette.background.level2,
                }
            }}
        >
            <Icon
                style={{
                    color: isCurrent ? theme.palette.primary[500] : theme.palette.text.primary,
                    fontSize: "16pt",
                }}
            />
            <Typography
                sx={{
                    color: isCurrent ? theme.palette.primary[500] : theme.palette.text.primary,
                    textWrap: "nowrap",
                    fontSize: "11pt",
                }}
            >
                {props.label}
            </Typography>
        </ListItem>
    )
}