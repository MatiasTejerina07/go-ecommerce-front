import { PanelesData } from "./dataPaneles"
import ViewUser from "@/layouts/ViewUser/ViewUser"
import { Search } from "@/layouts/ViewUser/components"
import Link from "next/link"
import { useEffect, useState } from "react"


export default function Paneles() {

    useEffect(() => {
        showCategories()
    }, [])

    const [show, setShow] = useState({})

    const showCategories = () => {
        const categories = {}
        PanelesData.forEach(item => {
            categories[item.menuItem] = false
        })
        setShow(categories)
    }
    console.log(show)

    const handleShow = (paneles, button) => {
        paneles.filter((panel) => {
            if (panel.menuItem === button.target.name) {
                return setShow(true)
            }
        })

    }

    return (
        <ViewUser>
            <div className=" flex ml-10 mt-10 gap-1">
                {PanelesData.map((panel, index) =>
                    <>
                        <button onClick={(e) => handleShow(PanelesData, e)} name={panel.menuItem} key={index} className="flex flex-col items-center gap-2 border rounded-t-md px-4 py-2">
                            {panel?.menuItem}
                            <span>{typeof panel.icon === "function" ? panel.icon() : ""}</span>
                        </button>
                    </>
                )}
            </div>
            <div className="border ml-10 mr-10">

            </div>

        </ViewUser>
    )
}
