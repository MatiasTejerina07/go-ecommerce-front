import Link from "next/link"
import { Categories, GroupButtons, Navbar, Search } from "@/layouts/ViewUser/components/index"
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
                    <GroupButtons />
                </nav>
            </header>
            <main>
                <section>
                    <div>
                        <Categories />

                    </div>
                </section>
                {children}
            </main>
        </div>
    )
}
