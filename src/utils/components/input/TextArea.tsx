import {Textarea as MuiTextarea, styled} from "@mui/joy";

export const Textarea = styled(MuiTextarea)(() => ({
    '--Textarea-radius': '5px',
    '&:hover': {
        borderColor: '#9e9e9e',
    },
    '&::before': {
        borderBottom: '5px solid var(--Textarea-focusedHighlight)',
        transform: 'scaleX(0)',
        left: 0,
        right: 0,
        bottom: '-3px',
        top: 'unset',
        transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
        borderRadius: 0,
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px"
    },
    '&:focus-within::before': {
        transform: 'scaleX(1)',
    },
}))