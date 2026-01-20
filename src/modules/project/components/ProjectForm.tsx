import {FieldValues, useForm} from "react-hook-form";
import {FormContainer} from "../../../utils/components/container/FormContainer.tsx";
import {Input} from "../../../utils/components/core/Input.tsx";
import {FormItem} from "../../../utils/form/FormItem.tsx";
import {Box, Button, FormControl, FormHelperText, FormLabel, TextareaProps, useTheme} from "@mui/joy";
import {Textarea} from "../../../utils/components/input/TextArea.tsx";
import {useNavigate} from "react-router-dom";

import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {useTranslation} from "react-i18next";
import {ColorPicker} from "../../../utils/components/color/ColorPicker.tsx";
import {useRef} from "react";
import {projectUseCase} from "../usecase/ProjectUseCase.ts";
import {popup} from "../../../utils/alerts/Popup.ts";

export const ProjectForm = () => {
    const {t} = useTranslation()
    const theme = useTheme()

    const colors: string[] = theme.palette.primary as unknown as string[]
    const defaultColor: string = colors[500]
    const colorRef = useRef<string>(defaultColor)

    const form = useForm()

    const {formState: {errors}} = form
    const colorError = (errors["color"]?.message ?? "") as string

    const nav = useNavigate()

    const handleSubmitRegister = (data: FieldValues) => {
        projectUseCase.register({
            color: colorRef.current,
            name: data.name,
            description: data.description
        }).then((response) => {
            if (response.error) {
                popup.toast("error", t(response.error.code), 2000).then()
            } else {
                nav("/home")
            }
        })
    }

    const Description = (props: TextareaProps) => (
        <Textarea minRows={4} {...props}/>
    )

    return (
        <FormContainer
            {...form}
            handler={handleSubmitRegister}
        >
            <Box sx={{display: "flex", gap: 1, width: "100%"}}>
                <FormItem
                    name={"name"}
                    label={t("project.form.name")}
                    component={Input}
                    options={{required: t("project.rule.name_is_empty")}}
                />
                <Box sx={{flex: 0.5}}>
                    <FormControl error={!!colorError}>
                        <FormLabel>{t("project.form.color")}</FormLabel>
                        <ColorPicker
                            initialColor={defaultColor}
                            onChange={(color) => colorRef.current = color}
                        />
                        <FormHelperText sx={{mt: 0.1, fontSize: "0.75rem"}}>
                            {colorError}&nbsp;
                        </FormHelperText>
                    </FormControl>
                </Box>
            </Box>
            <FormItem
                name={"description"}
                label={t("project.form.description")}
                component={Description}
            />
            <Box sx={{display: "flex", gap: 1, width: "100%", mt: 2}}>
                <Button
                    variant={"solid"}
                    color={"danger"}
                    sx={{flex: 1}}
                    startDecorator={<CloseRoundedIcon/>}
                    onClick={() => nav("/home")}
                >
                    {t("project.action.cancel")}
                </Button>
                <Button
                    variant={"solid"}
                    sx={{flex: 1}}
                    startDecorator={<AddRoundedIcon/>}
                    type={"submit"}
                >
                    {t("project.action.create")}
                </Button>
            </Box>
        </FormContainer>
    )
}