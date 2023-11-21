import { Navbar } from "./components/Navbar"
import Search from "./components/Search";
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
                <Search />
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
