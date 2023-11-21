import { PanelesData } from "./dataPaneles"
import ViewUser from "@/layouts/ViewUser/ViewUser"
import { Search } from "@/layouts/ViewUser/components"
import Link from "next/link"
import { useState } from "react"


export default function Paneles() {

    const [show, setShow] = useState(false)

    const handleShow = (e) => {
        console.log(e.target.string())
    }
    return (
        <ViewUser>
            <div className=" flex justify-center gap-10">
                {PanelesData.map((panel, index) =>
                    <Link href={""} onClick={(e) => handleShow(e)} className="flex flex-col items-center gap-2">
                        <p key={index}>{panel?.menuItem}</p>
                        <span>{typeof panel.icon === "function" ? panel.icon() : ""}</span>
                    </Link>
                )}
            </div>

        </ViewUser>
    )
}
