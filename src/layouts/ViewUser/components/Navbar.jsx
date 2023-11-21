import { NavBurger, CloseBurger } from "@/icon/icons"
import { useState } from "react"
import Link from "next/link"


export const Navbar = () => {

    const [close, setClose] = useState(false)
    const hanldeBurger = () => {
        setClose(!close)
    }


    return (
        <>
            <button onClick={hanldeBurger}>
                {close ?
                    (<CloseBurger />) : (<NavBurger />)
                }
            </button>
            {close && (
                <ul className="fixed -translate-x-20 bg-red-300 px-8 py-4 rounded-lg ">
                    <li>
                        <Link href={"/"}>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link href={"/"}>
                            Productos
                        </Link>
                    </li>
                    <li>
                        <Link href={"/"}>
                            zarasa
                        </Link>
                    </li>
                </ul>
            )}

        </>
    )
}
