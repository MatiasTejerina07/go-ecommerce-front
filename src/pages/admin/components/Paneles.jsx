import { PanelesData } from "./dataPaneles"
import ViewUser from "@/layouts/ViewUser/ViewUser"
import { useEffect, useState } from "react"
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";

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


    const [selected, setSelected] = useState("")

    console.log(selected)
    return (
        <ViewUser>
            <div className="flex w-full flex-col">
                <Tabs
                    color="primary"
                    aria-label="Options"
                    className="ml-5 mt-4 font-roboto"
                    items={PanelesData}
                    selectedKey={selected}
                    onSelectionChange={setSelected}>
                    {PanelesData.map((item, index) =>


                        <Tab key={index} title={item.menuItem}>
                            <Card>
                                <CardBody>
                                    {item.component}
                                </CardBody>
                            </Card>
                        </Tab>
                    )

                    }
                </Tabs>
            </div>

        </ViewUser>
    )
}

/* <div className=" flex ml-10 mt-10">
                {PanelesData.map((panel, index) =>
                    <>
                        <button onClick={(e) => handleShow(e.target.name)} name={panel.menuItem} key={index} className="flex flex-col items-center gap-2 border rounded-t-md px-4 py-2">
                            {panel?.menuItem}

                        </button>
                    </>
                )}
            </div>
            <div className="border ml-10 mr-10">

            </div> */