import React from "react"
import { useEffect } from "react"
import { useRouter } from "next/router"
import { useAuth } from "@/hooks"

export default function NewUser({ children }) {
    const [logo, data, inputs, page] = React.Children.toArray(children)


    const router = useRouter()
    const { user } = useAuth()
    useEffect(() => {
        if (user) router.push('/')
    }, [])

    if (user) return null


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
                        {page}
                    </div>
                </div>
            </div>
        </div>
    )
}
