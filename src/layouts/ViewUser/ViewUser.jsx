import { Navbar } from "./components/Navbar"
import Search from "./components/Search";
import Link from "next/link"
import GroupButtons from "./components/GroupButtons";
import { useAuth } from "@/hooks"


export default function ViewUser(props) {
    const { children } = props;
    const { isAdmin } = useAuth();


    return (
        <div className="w-full h-screen">
            <header className="flex w-full items-center">
                <div className="w-[30%]">
                    <Link href={"/"}>
                        <img className="w-24 ml-10" src="/images/ecommerce.jpg" alt="logo" />
                    </Link>
                </div>
                <div>
                    <Search />
                </div>
                <nav className=" flex w-[30%] justify-around ">
                    {isAdmin && <Link href={"/admin"}>Admin</Link>}
                    <GroupButtons />
                </nav>
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}
