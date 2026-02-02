import {Outlet} from "react-router-dom";
import {ProjectMenu} from "./ProjectMenu.tsx";
import Layout from "../../../utils/components/layout/Layout.tsx";
import {DefaultPage} from "../../../utils/components/container/DefaultPage.tsx";

export const ProjectRoot = () => {
    return (
        <DefaultPage sx={{flexDirection: "row"}}>
            <Layout.SideNav>
                <ProjectMenu/>
            </Layout.SideNav>
            <Layout.Main sx={{p: 1, flex: 1}}>
                <Outlet/>
            </Layout.Main>
        </DefaultPage>
    )
}