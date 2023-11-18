import { useAuth } from "@/hooks"
import ViewUser from "@/layouts/ViewUser/ViewUser"

export default function index() {

    const { user, logout } = useAuth()
    console.log(user)
    return (
        <ViewUser >
            <h2>index</h2>
            <button onClick={logout}>logout</button>
        </ViewUser>
    )
}
