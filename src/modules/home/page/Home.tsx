import {useAuth} from "../../auth/provider/UseAuth.ts";

export const Home = () => {
    const {user} = useAuth()

    console.log({user})

    return (
        <div>Home</div>
    )
}