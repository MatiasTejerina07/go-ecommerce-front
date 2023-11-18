import { useAuth } from "@/hooks"

export default function index() {

    const { user, logout } = useAuth()
    console.log(user)
    return (
        <div >
            <h2>index</h2>
            <button onClick={logout}>logout</button>
        </div>
    )
}
