import { Search } from "@/layouts/ViewUser/components"
import ButtonAdd from "@/components/ButtonAdd"
import { useState, useEffect } from "react"
import { productsCtrl } from "@/api"

const ITEMS_PER_PAGE = 10;

export default function Products() {

    const [products, setProducts] = useState(null)
    const page = 1


    useEffect(() => {
        (async () => {
            try {
                const response = await productsCtrl.getAll(1, 10, "")
                setProducts(response.data || [])
                console.log(response)
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
                {
                    products && products.map((product, index) =>
                        <div>
                            <p>{product.prodTitle}</p>


                        </div>

                    )
                }
            </div>
        </div>

    )
}
