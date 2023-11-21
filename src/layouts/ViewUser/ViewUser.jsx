import { Navbar } from "./components/Navbar"
import { Input } from "@nextui-org/react"
import Link from "next/link"
import { useAuth } from "@/hooks"


export default function ViewUser(props) {
    const { children } = props;
    const { isAdmin } = useAuth();


    return (
        <div className="w-full h-screen">
            <header className="flex items-center justify-between">
                <Link href={"/"}>
                    <img className="w-24 ml-10" src="/images/ecommerce.jpg" alt="logo" />
                </Link>
                <Input title="hola" placeholder="hola" className="w-[600px]" variant="flat" />
                <nav className="mr-10">
                    {isAdmin && <Link href={"/admin"}>Admin</Link>}
                    <Navbar />
                </nav>
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}
