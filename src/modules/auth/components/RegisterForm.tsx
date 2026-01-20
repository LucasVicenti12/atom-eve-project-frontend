import {FieldValues, useForm} from "react-hook-form";
import {FormContainer} from "../../../utils/components/container/FormContainer.tsx";
import {Box, Button, Divider, Typography} from "@mui/joy";
import {useTranslation} from "react-i18next";
import {Input} from "../../../utils/components/core/Input.tsx";
import {FormItem} from "../../../utils/form/FormItem.tsx";
import {Password} from "../../../utils/components/input/Password.tsx";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded";
import {useNavigate} from "react-router-dom";
import {popup} from "../../../utils/alerts/Popup.ts";
import {authUseCase} from "../usecase/AuthUseCase.ts";

export const RegisterForm = () => {
    const {t} = useTranslation()

    const nav = useNavigate()

    const form = useForm()

    const handleSubmitRegister = (data: FieldValues) => {
        authUseCase.register({
            username: data.username,
            password: data.password,
            name: data.name,
            email: data.email,
            confirmPassword: data.confirmPassword
        }).then((response) => {
            if (response.error) {
                popup.toast("error", t(response.error.code), 2000).then()
            } else {
                nav("/login")
            }
        })
    }

    return (
        <FormContainer
            {...form}
            handler={handleSubmitRegister}
        >
            <Typography level={"title-lg"}>
                {t("auth.label.welcome")}
            </Typography>
            <Typography level={"body-sm"}>
                {t("auth.label.register_subtitle")}
            </Typography>
            <Box sx={{mt: 2}}/>
            <FormItem
                name={"username"}
                label={t("auth.form.username")}
                component={Input}
                options={{required: t("auth.rule.username_is_required")}}
            />
            <FormItem
                name={"name"}
                label={t("auth.form.name")}
                component={Input}
                options={{required: t("auth.rule.name_is_required")}}
            />
            <Box sx={{display: "flex", gap: 1, width: "100%"}}>
                <FormItem
                    name={"password"}
                    label={t("auth.form.password")}
                    component={Password}
                    options={{required: t("auth.rule.password_is_required")}}
                />
                <FormItem
                    name={"confirmPassword"}
                    label={t("auth.form.confirm_password")}
                    component={Password}
                    options={{required: t("auth.rule.confirm_password_is_required")}}
                />
            </Box>
            <FormItem
                name={"email"}
                label={t("auth.form.email")}
                component={Input}
                options={{required: t("auth.rule.email_is_required")}}
            />
            <Button type={"submit"} startDecorator={<HowToRegRoundedIcon/>}>
                {t("auth.action.do_register")}
            </Button>
            <Box sx={{mt: 1}}/>
            <Divider>{t("auth.label.or")}</Divider>
            <Box sx={{mt: 1}}/>
            <Button
                variant={"outlined"}
                startDecorator={<LoginRoundedIcon/>}
                onClick={() => nav("/login")}
            >
                {t("auth.action.do_login")}
            </Button>
        </FormContainer>
    )
}