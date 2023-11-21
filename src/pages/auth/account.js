import { useAuth } from "@/hooks"

export default function AccountPage() {
    const { user } = useAuth();
    const url = user ? "/account" : "/auth/login"




    return (
        <></>
    )
}
