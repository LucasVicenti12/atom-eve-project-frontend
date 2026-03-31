import {useAtom} from "jotai";
import LayoutState from "../../utils/components/layout/state/layout-state.ts";
import {EveDrawer} from "../../utils/components/container/eve-drawer.tsx";
import LayoutData from "../../utils/components/layout/data/layout-data.ts";
import {useMobile} from "../../utils/functions/use-size.ts";
import {ColumnBox} from "../../utils/components/container/column-box.tsx";
import {EveNavTitle} from "./eve-nav-title.tsx";
import {useCurrentRoute} from "../../config/router/use-routes.tsx";
import {isValidElement} from "react";
import {EveNavMenuItem} from "./eve-nav-menu-item.tsx";

export const EveMenuList = () => {
    const [open, setOpen] = useAtom(LayoutState.NavOpen);

    const isMobile = useMobile()

    const current = useCurrentRoute()

    if (isValidElement(current.children)) return

    return (
        <EveDrawer
            open={open}
            anchor={"left"}
            onClose={() => setOpen(false)}
            sx={{
                top: isMobile ? 0 : `${LayoutData.AppBarHeight + 25}px`,
                width: isMobile ? "100%" : "250px",
                m: isMobile ? 0 : 1,
                borderRadius: isMobile ? 0 : "lg"
            }}
        >
            <ColumnBox>
                <EveNavTitle/>
                {
                    current.children?.map((child, i) => (
                        <EveNavMenuItem
                            {...child}
                            basePath={current.path}
                            simple={false}
                            key={`eve-menu-item-${i}`}
                        />
                    ))
                }
            </ColumnBox>
        </EveDrawer>
    );
}