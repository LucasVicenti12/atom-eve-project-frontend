import {Box, BoxProps} from "@mui/joy";
import {FieldValues, FormProvider, FormProviderProps} from "react-hook-form";
import {ReactNode} from "react";

interface FormContainerProps extends BoxProps, FormProviderProps {
    handler: (data: FieldValues) => void
    children: ReactNode
}

export const FormContainer = (props: FormContainerProps) => {
    const {handler, children, sx, ...methods} = props

    return (
        <FormProvider {...methods}>
            <Box
                sx={[
                    {
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        gap: 1
                    },
                    ...(Array.isArray(sx) ? sx : [sx])
                ]}
                component={"form"}
                onSubmit={props.handleSubmit(handler)}
            >
                {children}
            </Box>
        </FormProvider>
    )
}