import { Input } from "@nextui-org/react"
import React from "react"



export default function NewUser({ children }) {

    const [logo, data, inputs] = React.Children.toArray(children)

    return (


        <div className="w-full h-full">
            {logo}
            <div className="flex mt-20">
                <div className="w-[50%] border-r-[1px] border-slate-400 h-full flex justify-center items-center">
                    {data}
                </div>
                <div className="w-[50%] flex justify-center items-center">
                    {inputs}
                </div>
            </div>
        </div>
    )
}
