import {LoginForm} from "../components/login-form.tsx";
import {ElevatedBox} from "../../../utils/components/container/elevated-box.tsx";
import {OutScopedPage} from "../../../utils/components/container/out-scoped-page.tsx";

export const LoginPage = () => (
    <OutScopedPage>
        <ElevatedBox
            sx={{
                p: 1,
                backgroundColor: "background.surface",
                width: "min(35rem, 100%)"
            }}
        >
            <LoginForm/>
        </ElevatedBox>
    </OutScopedPage>
)