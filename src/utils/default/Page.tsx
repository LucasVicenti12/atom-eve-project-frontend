import {Outlet} from "react-router-dom";
import Layout from "../components/layout/Layout.tsx";

export const Page = () => {
    return (
        <Layout.Root>
            <Layout.Header>
                OPA
            </Layout.Header>
            <Layout.Main>
                <Outlet/>
            </Layout.Main>
        </Layout.Root>
    )
}