import { useAuth } from "@/hooks"
import { useRouter } from "next/router";
import Paneles from "./components/Paneles";
import ViewUser from "@/layouts/ViewUser/ViewUser"
import { useState } from "react";


export default function PageAdmin() {
    const [reload, setReload] = useState(false)
    const { isAdmin } = useAuth();
    const router = useRouter();

    if (!isAdmin) router.push("/")


    return (
        <ViewUser>

            <Paneles />

        </ViewUser>
    )
}
