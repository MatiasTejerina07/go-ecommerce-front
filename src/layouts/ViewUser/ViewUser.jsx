import { Navbar } from "./components/Navbar"
import { Input } from "@nextui-org/react"
import Link from "next/link"

export default function ViewUser() {


    return (
        <div className="w-full h-screen">
            <header className="flex items-center justify-between">
                <Link href={"/"}>
                    <img className="w-24 ml-10" src="/images/ecommerce.jpg" alt="logo" />
                </Link>
                <Input title="hola" placeholder="hola" className="w-[600px]" variant="flat" />
                <nav className="mr-10">
                    <Navbar />
                </nav>
            </header>
            <main>

            </main>
        </div>
    )
}
