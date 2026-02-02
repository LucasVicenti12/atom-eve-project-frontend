import {
    Box,
    List,
    ListItem,
    ListItemButton,
    listItemButtonClasses,
    ListItemContent,
    Typography
} from "@mui/joy";
import HomeRounded from "@mui/icons-material/HomeRounded"
import {useNavigate} from "react-router-dom";
import Layout from "../../../utils/components/layout/Layout.tsx";
import {useContext} from "react";

export const ProjectMenu = () => {
    const nav = useNavigate()

    const {open} = useContext(Layout.SideNavContext)

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
                <ListItem onClick={() => nav("/home")}>
                    {
                        open ? (
                            <ListItemButton>
                                <HomeRounded fontSize={"small"}/>
                                <ListItemContent>
                                    <Typography
                                        level="title-sm"
                                        sx={{textWrap: "nowrap"}}
                                    >
                                        Home
                                    </Typography>
                                </ListItemContent>
                            </ListItemButton>
                        ) : (
                            <ListItemButton>
                                <HomeRounded fontSize={"small"}/>
                            </ListItemButton>
                        )
                    }
                </ListItem>
            </List>
        </Box>
    )
};