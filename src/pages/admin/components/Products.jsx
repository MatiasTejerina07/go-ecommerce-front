import { Search } from "@/layouts/ViewUser/components"
import { Button } from "@nextui-org/react"

export default function Products() {
    return (
        <div className="w-full h-full">
            <div className="flex justify-between">
                <Search className={"w-[300px]"} />
                <Button className="bg-success-200 px-3 font-poppins font-thin text-[13px] hover:transition-all ease-in-out duration-500 hover:shadow-lg hover:bg-success-300 shadow-black/25">Add product</Button>
            </div>
            <div className="mt-4">
                <h2>Productos...</h2>
            </div>
        </div>

    )
}
