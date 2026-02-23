import i18n from "i18next";
import {initReactI18next} from "react-i18next";

import auth from "./dictionary/pt/auth.json"
import home from "./dictionary/pt/home.json"
import exception from "./dictionary/pt/exception.json"
import project from "./dictionary/pt/project.json"
import modules from "./dictionary/pt/modules.json"

import en from "./lang/en.json";

i18n.use(initReactI18next).init({
    resources: {
        pt: {
            translation: {
                auth,
                home,
                exception,
                project,
                modules,
            }
        },
        en
    },
    lng: "pt",
    interpolation: {
        escapeValue: false
    }
});

export default i18n;