import {useSetAtom} from "jotai";
import LayoutState from "../../utils/components/layout/state/layout-state.ts";
import {RowBox} from "../../utils/components/container/row-box.tsx";
import {IconButton, Typography} from "@mui/joy";

import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

export const EveNavTitle = () => {
    const setOpen = useSetAtom(LayoutState.NavOpen);

    return (
        <RowBox
            sx={{
                alignItems: "center",
                justifyContent: "space-between"
            }}
        >
            <Typography
                sx={{
                    fontSize: "14pt",
                    fontWeight: "bold",
                    ml: 1
                }}
            >
                EveAtom
            </Typography>
            <IconButton
                onClick={() => {
                    setOpen(false)
                }}
            >
                <KeyboardArrowRightRoundedIcon
                    sx={{
                        transform: "rotate(-180deg)"
                    }}
                />
            </IconButton>
        </RowBox>
    )
}