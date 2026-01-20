import {createRoot} from 'react-dom/client'
import './index.css'
import './i18n/Config.ts';
import {Root} from "./config/router/Root.tsx";
import {CssBaseline, CssVarsProvider} from "@mui/joy";

createRoot(document.getElementById('root')!).render(
    <CssVarsProvider defaultMode={"light"}>
        <CssBaseline/>
        <Root/>
    </CssVarsProvider>
)
