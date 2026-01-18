import {Box, Button} from "@mui/joy";
import {Input} from "../../../utils/components/core/Input.tsx";
import {FieldValues, FormProvider, useForm} from "react-hook-form";
import {Password} from "../../../utils/components/input/Password.tsx";
import {FormItem} from "../../../utils/form/FormItem.tsx";
import {useTranslation} from "react-i18next";
import {popup} from "../../../utils/alerts/Popup.ts";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../provider/UseAuth.ts";

export const LoginForm = () => {
    const {t} = useTranslation()

    const {login} = useAuth()
    const form = useForm();
    const navigate = useNavigate();

    const handleSubmitLogin = form.handleSubmit((data: FieldValues) => {
        login({username: data.username, password: data.password}).then((response) => {
            if (response.error) {
                popup.toast("error", t(`exceptions.${response.error.code}`), 2000).then()
            } else {
                navigate("/home")
            }
        })
    })

    return (
        <FormProvider {...form}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    gap: 1
                }}
                component={"form"}
                onSubmit={handleSubmitLogin}
            >
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
                <Button type={"submit"}>
                    {t("auth.action.do_login")}
                </Button>
            </Box>
        </FormProvider>
    )
}