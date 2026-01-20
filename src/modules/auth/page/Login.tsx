import {LoginForm} from "../components/LoginForm.tsx";
import {ElevatedBox} from "../../../utils/components/container/ElevatedBox.tsx";
import {OutScopedPage} from "../../../utils/components/container/OutScopedPage.tsx";

export const Login = () => (
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