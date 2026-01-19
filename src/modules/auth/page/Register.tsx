import {Box} from "@mui/joy";
import {ElevatedBox} from "../../../utils/components/container/ElevatedBox.tsx";
import {RegisterForm} from "../components/RegisterForm.tsx";

export const Register = () => {
    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: "0.3fr",
            }}
        >
            <ElevatedBox
                sx={{
                    p: 1
                }}
            >
                <RegisterForm/>
            </ElevatedBox>
        </Box>
    )
}