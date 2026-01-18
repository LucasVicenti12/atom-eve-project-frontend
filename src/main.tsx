import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n/Config.ts';
import {Root} from "./config/router/Root.tsx";

createRoot(document.getElementById('root')!).render(
    <Root />
)
