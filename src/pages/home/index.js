import { useAuth } from "@/hooks"

export default function index() {

    const data = useAuth()
    console.log(data)
    return (
        <div >
            <h2>index</h2>
        </div>
    )
}
