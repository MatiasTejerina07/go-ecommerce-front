import { Search } from "@/layouts/ViewUser/components"
import ButtonAdd from "@/components/ButtonAdd"
import { useState, useEffect } from "react"


export default function Products() {

    const [Products, setProducts] = useState(null)

    useEffect(() => {
        (async () => {
            try {

            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    return (
        <div className="w-full h-full">
            <div className="flex justify-between">
                <Search className={"w-[300px]"} />
                <ButtonAdd name="Add Product" />
            </div>
            <div className="mt-4">
                <h2>Productos...</h2>
            </div>
        </div>

    )
}
