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
                <ul className="fixed">
                    <li>
                        <Link href={"/"}>
                            path 1
                        </Link>
                    </li>
                    <li>
                        <Link href={"/"}>
                            path 2
                        </Link>
                    </li>
                    <li>
                        <Link href={"/"}>
                            path 3
                        </Link>
                    </li>
                </ul>
            )}

        </>
    )
}
