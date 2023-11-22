import { PanelesData } from "./dataPaneles"
import ViewUser from "@/layouts/ViewUser/ViewUser"
import { useEffect, useState } from "react"


export default function Paneles() {
    const [show, setShow] = useState({})

    useEffect(() => {
        showCategories()

    }, [])



    const showCategories = () => {
        const categories = {}
        PanelesData.forEach(item => {
            categories[item.menuItem] = false
        })
        setShow(categories)
    }

    const handleShow = (buttonName) => {
        const keysShow = Object.keys(show)
        keysShow.forEach(key => {
            if (key === buttonName) {
                show[key] = true && !buttonName === false
            }
        })
        console.log(show)

    };


    return (
        <ViewUser>
            <div className=" flex ml-10 mt-10">
                {PanelesData.map((panel, index) =>
                    <>
                        <button onClick={(e) => handleShow(e.target.name)} name={panel.menuItem} key={index} className="flex flex-col items-center gap-2 border rounded-t-md px-4 py-2">
                            {panel?.menuItem}

                        </button>
                    </>
                )}
            </div>
            <div className="border ml-10 mr-10">

            </div>

        </ViewUser>
    )
}
