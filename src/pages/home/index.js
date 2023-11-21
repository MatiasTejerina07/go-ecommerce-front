import { useAuth } from "@/hooks"
import ViewUser from "@/layouts/ViewUser/ViewUser"

export default function index() {

    const { user, logout } = useAuth()
    console.log(user)
    return (
        <ViewUser >

        </ViewUser>
    )
}
