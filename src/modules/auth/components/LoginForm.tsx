import {Box, Button, Divider, Typography} from "@mui/joy";
import {Input} from "../../../utils/components/core/Input.tsx";
import {FieldValues, useForm} from "react-hook-form";
import {Password} from "../../../utils/components/input/Password.tsx";
import {FormItem} from "../../../utils/form/FormItem.tsx";
import {useTranslation} from "react-i18next";
import {popup} from "../../../utils/alerts/Popup.ts";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../provider/UseAuth.ts";

import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import PasswordRoundedIcon from '@mui/icons-material/PasswordRounded';
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';
import {FormContainer} from "../../../utils/components/container/FormContainer.tsx";

export const LoginForm = () => {
    const {t} = useTranslation()

    const nav = useNavigate()

    const {login} = useAuth()
    const form = useForm();

    const handleSubmitLogin = (data: FieldValues) => {
        login({username: data.username, password: data.password}).then((response) => {
            if (response.error) {
                popup.toast("error", t(response.error.code), 2000).then()
            } else {
                nav("/home")
            }
        })
    }

    return (
        <FormContainer
            {...form}
            handler={handleSubmitLogin}
        >
            <Typography level={"title-lg"}>
                {t("auth.label.welcome_back")}
            </Typography>
            <Typography level={"body-sm"}>
                {t("auth.label.welcome_subtitle")}
            </Typography>
            <Box sx={{mt: 2}}/>
            <FormItem
                name={"username"}
                label={t("auth.form.username")}
                component={Input}
                options={{required: t("auth.rule.username_is_required")}}
            />
            <FormItem
                name={"password"}
                label={t("auth.form.password")}
                component={Password}
                options={{required: t("auth.rule.password_is_required")}}
            />
            <Button type={"submit"} startDecorator={<LoginRoundedIcon/>}>
                {t("auth.action.do_login")}
            </Button>
            <Box sx={{mt: 1}}/>
            <Divider>{t("auth.label.or")}</Divider>
            <Box sx={{mt: 1}}/>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 1
                }}
            >
                <Button
                    sx={{flex: 1}}
                    startDecorator={<HowToRegRoundedIcon/>}
                    variant={"outlined"}
                    onClick={() => nav("/register")}
                >
                    {t("auth.action.wish_do_register")}
                </Button>
                <Button
                    type={"submit"}
                    sx={{flex: 1}}
                    startDecorator={<PasswordRoundedIcon/>}
                    variant={"outlined"}
                >
                    {t("auth.action.do_forgot_password")}
                </Button>
            </Box>
        </FormContainer>
    )
}