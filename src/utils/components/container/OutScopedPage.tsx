import {Box, BoxProps, useTheme} from "@mui/joy";

export const OutScopedPage = (props: BoxProps) => {
    const theme = useTheme()

    return (
        <Box
            sx={[
                {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    backgroundImage: 'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
                    backgroundRepeat: 'no-repeat',
                    overflowY: "auto",
                    ...theme.applyStyles('dark', {
                        backgroundImage:
                            'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
                    }),
                },
                ...(Array.isArray(props.sx) ? props.sx : [props.sx])
            ]}
        >
            {props.children}
        </Box>
    )
}