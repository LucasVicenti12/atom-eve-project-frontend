import {ElevatedBox} from "../../../utils/components/container/elevated-box.tsx";
import {RegisterForm} from "../components/register-form.tsx";
import {OutScopedPage} from "../../../utils/components/container/out-scoped-page.tsx";

export const RegisterPage = () => (
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