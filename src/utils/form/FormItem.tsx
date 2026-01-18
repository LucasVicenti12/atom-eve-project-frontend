import {FieldValues, Path, RegisterOptions, useFormContext} from "react-hook-form";
import {ComponentType} from "react";
import {FormControl, FormHelperText, FormLabel, InputProps} from "@mui/joy";

interface FormItemProps<T extends FieldValues> {
    name: Path<T>
    label: string
    component: ComponentType<InputProps>
    options?: RegisterOptions<T>
}

export const FormItem = <T extends FieldValues>(props: FormItemProps<T>) => {
    const {register, formState: {errors}} = useFormContext<T>()

    const error = (errors[props.name]?.message ?? "") as string

    const Component = props.component

    return (
        <FormControl error={!!error}>
            <FormLabel>{props.label}</FormLabel>
            <Component
                {...register(props.name, props.options)}
            />
            <FormHelperText sx={{mt: 0.1, fontSize: "0.75rem"}}>
                {error}&nbsp;
            </FormHelperText>
        </FormControl>
    )
}