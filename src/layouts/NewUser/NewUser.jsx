import { Input } from "@nextui-org/react"
import React from "react"
import Link from "next/link"
import { Button } from "@nextui-org/react"



export default function NewUser({ children }) {

    const [logo, data, inputs] = React.Children.toArray(children)

    return (


        <div className="w-full h-full">
            {logo}
            <div className="flex mt-20">
                <div className="w-[50%]  h-full flex justify-center items-center">
                    {data}
                </div>
                <div className="w-[50%] flex-col border-l-[1px] border-slate-400 flex justify-center items-center">
                    {inputs}
                    <div className="mt-4 flex flex-col gap-4">
                        <Link className="font-poppins -tracking-wider text-[14px] decoration-slice underline  hover:text-[#4338CA] hover:decoration-indigo-400" href={"/"}>
                            Ya tengo una cuenta
                        </Link>
                        <Button className=" bg-indigo-300/40 font-poppins hover:bg-indigo-300/80 hover:shadow-slate-400 hover:shadow-2xl duration-700 hover:transition-all ease-soft-spring ">
                            Iniciar sesión
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
