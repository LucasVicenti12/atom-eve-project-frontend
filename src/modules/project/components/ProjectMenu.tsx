import {
    Box,
    List,
    ListItem,
    ListItemButton,
    listItemButtonClasses,
    ListItemContent,
    Typography
} from "@mui/joy";
import {useNavigate} from "react-router-dom";
import Layout from "../../../utils/components/layout/Layout.tsx";
import {useContext} from "react";
import {SvgIconComponent} from "@mui/icons-material";

import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded';
import InsertChartOutlinedRoundedIcon from '@mui/icons-material/InsertChartOutlinedRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import {useTranslation} from "react-i18next";

export const ProjectMenu = () => {
    const {t} = useTranslation()
    const nav = useNavigate()

    return (
        <Box
            sx={{
                minHeight: "100%",
                overflow: 'hidden auto',
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                [`& .${listItemButtonClasses.root}`]: {
                    gap: 1.5,
                },
            }}
        >
            <List
                size="sm"
                sx={{
                    gap: 0,
                    '--List-nestedInsetStart': '30px',
                    '--ListItem-radius': (theme) => theme.vars.radius.sm,
                }}
            >
                {
                    options.map((o, i) => (
                        <ProjectMenuOption
                            key={`project_menu_options_${i}`}
                            title={t(`project.menu.title.${o.title}`)}
                            icon={o.icon}
                            path={o.path}
                            nav={(path: string) => nav(path)}
                        />
                    ))
                }
            </List>
        </Box>
    )
};

const options: ProjectMenuOptionProps[] = [
    {
        title: "general",
        path: "",
        icon: AutoGraphRoundedIcon,
    },
    {
        title: "platform",
        path: "platform",
        icon: DevicesRoundedIcon,
    },
    {
        title: "task",
        path: "task",
        icon: InsertChartOutlinedRoundedIcon,
    },
    {
        title: "config",
        path: "config",
        icon: SettingsSuggestRoundedIcon
    }
]

interface ProjectMenuOptionProps {
    title: string
    icon: SvgIconComponent
    path: string
    nav?: (path: string) => void
}

const ProjectMenuOption = (props: ProjectMenuOptionProps) => {
    const Icon = props.icon

    const {open} = useContext(Layout.SideNavContext)

    return (
        <ListItem onClick={() => props.nav?.(props.path)}>
            {
                open ? (
                    <ListItemButton>
                        <Icon fontSize={"small"}/>
                        <ListItemContent>
                            <Typography
                                level="title-sm"
                                sx={{textWrap: "nowrap"}}
                            >
                                {props.title}
                            </Typography>
                        </ListItemContent>
                    </ListItemButton>
                ) : (
                    <ListItemButton>
                        <Icon fontSize={"small"}/>
                    </ListItemButton>
                )
            }
        </ListItem>
    )
}