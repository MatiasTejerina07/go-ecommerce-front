import { useAuth } from "@/hooks"
import { useRouter } from "next/router";
import Paneles from "./components/Paneles";

export default function PageAdmin() {
    const { isAdmin } = useAuth();
    const router = useRouter();

    if (!isAdmin) router.push("/")


    return (
        <div>
            <Paneles />
        </div>
    )
}
