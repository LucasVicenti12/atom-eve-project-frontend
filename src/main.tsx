import {createRoot} from 'react-dom/client'
import './index.css'
import './i18n/i18n-config.ts';
import {Root} from "./config/router/root.tsx";
import {CssBaseline, CssVarsProvider} from "@mui/joy";

createRoot(document.getElementById('root')!).render(
    <CssVarsProvider defaultMode={"light"}>
        <CssBaseline/>
        <Root/>
    </CssVarsProvider>
)
