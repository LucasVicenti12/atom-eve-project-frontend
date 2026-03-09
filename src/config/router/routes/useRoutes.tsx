import {EveRoute} from "../../../utils/entities/entities.ts";

import {Home} from "../../../modules/home/page/Home";
import AutoGraphRoundedIcon from "@mui/icons-material/AutoGraphRounded";
import {Project} from "../../../modules/project/page/Project.tsx";
import ProjectLoader from "../../../modules/project/loader/ProjectLoader.ts";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import InsertChartOutlinedRoundedIcon from "@mui/icons-material/InsertChartOutlinedRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import {useTranslation} from "react-i18next";
import {matchPath, useLocation} from "react-router-dom";

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
            label: t("modules.home"),
            children: <Home/>,
            appBar: true,
        },
        {
            path: "project",
            id: ProjectLoader.ID,
            loader: ProjectLoader.Loader,
            label: t("modules.project"),
            children: [
                {
                    path: "",
                    label: t("modules.general"),
                    icon: AutoGraphRoundedIcon,
                    children: <Project/>
                },
                {
                    path: "platform",
                    label: t("modules.platform"),
                    icon: DevicesRoundedIcon,
                    children: <Project/>
                },
                {
                    path: "task",
                    label: t("modules.task"),
                    icon: InsertChartOutlinedRoundedIcon,
                    children: <Project/>
                },
                {
                    path: "config",
                    label: t("modules.config"),
                    icon: SettingsSuggestRoundedIcon,
                    children: <Project/>
                }
            ]
        }
    ]
}