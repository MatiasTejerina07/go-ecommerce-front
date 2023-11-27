import { Input, Spacer, Select, SelectItem, Button } from "@nextui-org/react"
import { useState, useEffect } from "react"
import { categoryCtrl } from "@/api"


export default function FormNewProduct() {
    const [categories, setCategories] = useState(null)

    useEffect(() => {
        (async () => {
            try {
                const response = await categoryCtrl.getAll();
                setCategories(response)
                console.log(categories)
            } catch (error) {
                console.log("hola", error)
            }

        })()
    }, [])




    return (
        <div className="flex-col flex mt-8 ml-4 gap-4 w-full">
            <>
                <Input className="w-[350px] font-roboto" name="ProdTitle" placeholder="Nombre" />
                <Input className="w-[350px]  font-roboto" name="ProdPath" placeholder="Slug" />

                <div className="">
                    <Select className="w-[650px] font-roboto" label="Seleccione la categoria" >
                        {categories && categories.map((category) =>
                        (
                            <SelectItem key={category.categID} >
                                {category.categName}
                            </SelectItem>
                        )


                        )}
                    </Select>
                </div>

                <div className="flex gap-4">
                    <Input type="number" name="ProdPrice" placeholder="Precio" className="w-[325px]  font-roboto" />
                    <Input type="number" name="ProdStock" placeholder="Stock" className="w-[325px]  font-roboto" />
                </div>
                <div className="flex justify-center items-center">
                    <Button className="w-[450px]  mt-4 bg-success-300  font-poppins " >
                        Enviar
                    </Button>

                </div>
            </>
        </div >
    )
}
