import {Outlet} from "react-router-dom";
import {Root} from "../components/layout/root.tsx";
import {Header} from "../components/layout/header.tsx";
import {useCurrentRoute} from "../../config/router/use-routes.tsx";
import {Fragment, isValidElement} from "react";
import {Nav} from "../components/layout/nav.tsx";
import {Main} from "../components/layout/main.tsx";
import {EveAppBar} from "../../core/appbar/eve-app-bar.tsx";
import {EveNavBar} from "../../core/navbar/eve-nav-bar.tsx";

export const Page = () => (
    <Root>
        <Header>
            <EveAppBar/>
        </Header>
        <RouterLoader/>
    </Root>
)

const RouterLoader = () => {
    const current = useCurrentRoute()

    const isSinglePage = isValidElement(current.children)

    return (
        <Fragment>
            {
                !isSinglePage && (
                    <Nav>
                        <EveNavBar/>
                    </Nav>
                )
            }
            <Main singlePage={isSinglePage}>
                <Outlet/>
            </Main>
        </Fragment>
    )
}