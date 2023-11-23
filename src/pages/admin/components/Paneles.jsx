import { PanelesData } from "./dataPaneles"
import ViewUser from "@/layouts/ViewUser/ViewUser"
import { useState } from "react"
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";

export default function Paneles() {



    const [selected, setSelected] = useState("")

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

