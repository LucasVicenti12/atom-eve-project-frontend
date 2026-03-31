import {useTheme} from "@mui/joy";
import useMediaQuery from "@mui/material/useMediaQuery";

const MobileBreakpoints = ["sm", "xs"]

export const useSize = () => {
    const theme = useTheme();

    const keys = [...theme.breakpoints.keys];

    return (
        // @ts-expect-error: invalid type definition
        keys.reduce((output, key) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const matches = useMediaQuery(theme.breakpoints.only(key));

            return matches ? key : output;
        }, null) ?? "xs"
    );
};

export const useMobile = () => {
    return MobileBreakpoints.includes(useSize())
}