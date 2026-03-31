import {EveRoute} from "../../utils/entities/utils.ts";

import {Home} from "../../modules/home/page/home.tsx";
import AutoGraphRoundedIcon from "@mui/icons-material/AutoGraphRounded";
import {ProjectPage} from "../../modules/project/page/project-page.tsx";
import ProjectLoader from "../../modules/project/loader/project-loader.ts";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import InsertChartOutlinedRoundedIcon from "@mui/icons-material/InsertChartOutlinedRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import {useTranslation} from "react-i18next";
import {matchPath, useLocation} from "react-router-dom";
import {PlatformPage} from "../../modules/platforms/page/platform-page.tsx";

export function useCurrentRoute(): EveRoute {
    const routes = useRoutes()
    const location = useLocation()

    return routes.find(x => matchPath(
        {path: `/${x.path}`, end: false},
        location.pathname
    ))!
}

export function useRoutes(): EveRoute[] {
    const {t} = useTranslation()

    return [
        {
            path: "home",
            code: "home",
            label: t("modules.home"),
            children: <Home/>,
            appBar: true,
        },
        {
            path: "project/:uuid",
            code: "project-general",
            id: ProjectLoader.ID,
            loader: ProjectLoader.Loader,
            label: t("modules.project"),
            children: [
                {
                    path: "",
                    code: "project-general",
                    label: t("modules.general"),
                    icon: AutoGraphRoundedIcon,
                    children: <ProjectPage/>
                },
                {
                    path: "platform",
                    code: "project-platform",
                    label: t("modules.platform"),
                    icon: DevicesRoundedIcon,
                    children: <PlatformPage/>
                },
                {
                    path: "task",
                    code: "project-task",
                    label: t("modules.task"),
                    icon: InsertChartOutlinedRoundedIcon,
                    children: <ProjectPage/>
                },
                {
                    path: "config",
                    code: "project-config",
                    label: t("modules.config"),
                    icon: SettingsSuggestRoundedIcon,
                    children: <ProjectPage/>
                }
            ]
        }
    ]
}