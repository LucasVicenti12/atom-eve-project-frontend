import {Outlet} from "react-router-dom";
import Layout from "../components/layout/Layout.tsx";
import {AppBar} from "../components/appbar/AppBar.tsx";

export const Page = () => {
    return (
        <Layout.Root>
            <Layout.Header>
                <AppBar/>
            </Layout.Header>
            <Layout.Main>
                <Outlet/>
            </Layout.Main>
        </Layout.Root>
    )
}