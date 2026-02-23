import {Outlet} from "react-router-dom";
import {Root} from "../components/layout/Root.tsx";
import {Header} from "../components/layout/Header.tsx";
import {useCurrentRoute} from "../../config/router/routes/useRoutes.tsx";
import {Fragment, isValidElement} from "react";
import {Nav} from "../components/layout/Nav.tsx";
import {Main} from "../components/layout/Main.tsx";
import {EveAppBar} from "../../core/appbar/EveAppBar.tsx";
import {EveNavBar} from "../../core/navbar/EveNavBar.tsx";

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