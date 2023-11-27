import { Input, Spacer, Select, SelectItem, Button } from "@nextui-org/react"
import { useState, useEffect } from "react"
import { categoryCtrl } from "@/api"
import { useFormik } from "formik"
import { initalValue, validationSchema } from "@/schema/product.form"

export default function FormNewProduct() {
    const [categories, setCategories] = useState(null)

    useEffect(() => {
        (async () => {
            try {
                const response = await categoryCtrl.getAll();
                setCategories(response)
            } catch (error) {
                console.log("hola", error)
            }

        })()
    }, [])


    const formik = useFormik({
        validationSchema: validationSchema(),
        initialValues: initalValue(),
        validateOnChange: false,
        onSubmit: async (values) => {
            console.log("first")
            try {
                console.log(values)
            } catch (error) {
                console.log(error)
            }
        }
    })



    return (
        <div className="flex-col flex mt-8 ml-4 gap-4 w-full">
            <>
                <form className="flex flex-col gap-">
                    <Input
                        className="w-[350px] font-roboto"
                        label="Nombre"
                        name="ProdTitle" placeholder="Nombre"
                        onChange={formik.handleChange}
                        value={formik.values.ProdTitle}
                        errorMessage={formik.errors.ProdTitle}
                    />


                    <Input
                        className="w-[350px]  font-roboto"
                        name="ProdPath"
                        placeholder="Slug"
                        onChange={formik.handleChange}
                        value={formik.values.ProdPath}
                        errorMessage={formik.errors.ProdPath}
                    />

                    {<Select
                        className="w-[650px] font-roboto"
                        name="ProdCategId"
                        label="Seleccione la categoria"
                        value={formik.values.ProdCategId}
                        onChange={(e) => formik.setFieldValue("ProdCategId", e.target.value)}
                    >
                        {categories && categories.map((category) =>
                        (
                            <SelectItem key={category.categID} >
                                {category.categName}
                            </SelectItem>
                        )
                        )}
                    </Select>}

                    <Input
                        type="number"
                        name="ProdStock"
                        placeholder="Stock"
                        className="w-[325px]  font-roboto"
                        onChange={formik.handleChange}
                        value={formik.values.ProdStock}
                    />

                    <Input
                        type="number"
                        name="ProdPrice"
                        placeholder="Precio"
                        className="w-[325px]  font-roboto"
                        onChange={formik.handleChange}
                        value={formik.values.ProdPrice}
                    />



                </form>
                <Button isLoading={formik.isSubmitting} onClick={formik.handleSubmit} className="w-[450px]  mt-4 bg-success-300  font-poppins " >
                    Enviar
                </Button>
            </>
        </div >
    )
}
