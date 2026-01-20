import {ElevatedBox} from "../../../utils/components/container/ElevatedBox.tsx";
import {RegisterForm} from "../components/RegisterForm.tsx";
import {OutScopedPage} from "../../../utils/components/container/OutScopedPage.tsx";

export const Register = () => (
    <OutScopedPage>
        <ElevatedBox
            sx={{
                p: 1,
                backgroundColor: "background.surface",
                width: "min(35rem, 100%)"
            }}
        >
            <RegisterForm/>
        </ElevatedBox>
    </OutScopedPage>
)