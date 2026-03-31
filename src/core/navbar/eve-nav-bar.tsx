import {useCurrentRoute} from "../../config/router/use-routes.tsx";
import {ElevatedBox} from "../../utils/components/container/elevated-box.tsx";
import {Fragment, isValidElement} from "react";
import {
    Divider,
    List,
    ListItemButton,
} from "@mui/joy";
import {useAtom} from "jotai";
import LayoutState from "../../utils/components/layout/state/layout-state.ts";

import {EveMenuList} from "./eve-menu-list.tsx";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import {EveNavMenuItem} from "./eve-nav-menu-item.tsx";

export const EveNavBar = () => {
    const [open, setOpen] = useAtom(LayoutState.NavOpen)

    const current = useCurrentRoute()

    if (isValidElement(current.children)) return

    return (
        <Fragment>
            {
                !open && (
                    <ElevatedBox
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: "36px",
                            minHeight: "100%",
                            borderRadius: "lg",
                            gap: 1,
                            boxShadow: "none",
                        }}
                    >
                        <ListItemButton
                            sx={(theme) => ({
                                display: "flex",
                                justifyContent: "center",
                                width: "36px",
                                height: "36px",
                                aspectRatio: "1 / 1",
                                borderRadius: "lg",
                                transition: "background-color 200ms ease",
                                backgroundColor: theme.palette.background.level3,
                                "&:hover": {
                                    backgroundColor: theme.palette.background.level2 + "!important",
                                },
                            })}
                            onClick={() => {
                                setOpen(prev => !prev)
                            }}
                        >
                            <KeyboardArrowRightRoundedIcon/>
                        </ListItemButton>
                        <Divider/>
                        <List
                            size="sm"
                            sx={{
                                gap: 1,
                                '--List-nestedInsetStart': '30px',
                                '--ListItem-radius': (theme) => theme.vars.radius.sm,
                                p: 0,
                                width: '36px',
                            }}
                        >
                            {current.children?.map((x, i) => (
                                <EveNavMenuItem
                                    key={`eve-menu-item-simple-${i}`}
                                    basePath={current?.path}
                                    simple={true}
                                    {...x}
                                />
                            ))}
                        </List>
                    </ElevatedBox>
                )
            }
            <EveMenuList/>
        </Fragment>
    )
}