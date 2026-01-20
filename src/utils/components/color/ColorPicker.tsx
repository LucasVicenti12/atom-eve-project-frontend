import {Fragment, useState} from 'react';
import {Box, Typography} from '@mui/joy';
import {HexColorPicker} from 'react-colorful';
import {Dialog} from "../container/Dialog.tsx";
import {useTranslation} from "react-i18next";
import {Input} from "../core/Input.tsx"

interface ColorPickerProps {
    initialColor: string,
    onChange: (newColor: string) => void
}

export const ColorPicker = (props: ColorPickerProps) => {
    const {t} = useTranslation()
    const [color, setColor] = useState(props.initialColor);

    const [open, setOpen] = useState(false);

    const handleColorChange = (newColor: string) => {
        setColor(newColor);
        props.onChange(newColor);
    };

    return (
        <Fragment>
            <div
                style={{
                    position: "absolute",
                    bottom: 54,
                    right: 0,
                }}
            >
                {open && (
                    <Dialog
                        open={true}
                        onClose={() => setOpen(false)}
                    >
                        <Box
                            sx={{
                                backgroundColor: "var(--joy-palette-background-surface)",
                                borderRadius: 'sm',
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                p: 1,
                                gap: 1
                            }}
                        >
                            <Typography
                                fontWeight={"bold"}
                                level={"body-sm"}
                            >
                                {t("general.components.color_picker")}
                            </Typography>
                            <HexColorPicker
                                style={{
                                    width: "100%"
                                }}
                                color={color}
                                onChange={handleColorChange}
                            />
                        </Box>
                    </Dialog>
                )}
            </div>
            <Box display="flex" gap={1} alignItems="center">
                <Input
                    value={color}
                    onChange={(e) => handleColorChange(e.target.value)}
                    sx={{flex: 1}}
                />
                <Box
                    sx={{
                        width: 32,
                        height: 32,
                        backgroundColor: color,
                        borderRadius: 'sm',
                        border: '1px solid #ccc',
                        cursor: "pointer"
                    }}
                    onClick={() => {
                        setOpen(prev => !prev)
                    }}
                />
            </Box>
        </Fragment>
    );
};