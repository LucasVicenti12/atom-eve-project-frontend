import {ComponentProps, useState} from "react";
import {Input} from "../core/Input.tsx";
import {IconButton} from "@mui/joy";

import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';

export const Password = (
    props: ComponentProps<typeof Input>
) => {
    const [showPass, setShowPass] = useState(false);

    return (
        <Input
            {...props}
            type={showPass ? "text" : "password"}
            endDecorator={
                <IconButton
                    onClick={() => setShowPass(prev => !prev)}
                    variant="plain"
                    size="sm"
                >
                    {showPass ? <VisibilityOffRoundedIcon/> : <VisibilityRoundedIcon/>}
                </IconButton>
            }
        />
    );
}