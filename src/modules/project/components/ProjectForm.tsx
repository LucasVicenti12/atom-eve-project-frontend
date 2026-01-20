import {FieldValues, useForm} from "react-hook-form";
import {FormContainer} from "../../../utils/components/container/FormContainer.tsx";
import {Input} from "../../../utils/components/core/Input.tsx";
import {FormItem} from "../../../utils/form/FormItem.tsx";
import {Box, Button} from "@mui/joy";
import {Textarea} from "../../../utils/components/input/TextArea.tsx";
import {useNavigate} from "react-router-dom";

import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {useTranslation} from "react-i18next";

export const ProjectForm = () => {
    const {t} = useTranslation()

    const form = useForm()

    const nav = useNavigate()

    const handleSubmitRegister = (data: FieldValues) => {
        console.log(data)
    }

    const Description = () => (
        <Textarea minRows={4}/>
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
                    <FormItem
                        name={"color"}
                        label={t("project.form.color")}
                        component={Input}
                        options={{required: t("project.rule.color_is_empty")}}
                    />
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