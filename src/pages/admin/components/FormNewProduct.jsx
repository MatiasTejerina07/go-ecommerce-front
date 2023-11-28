import { Input, Spacer, Select, SelectItem, Button } from "@nextui-org/react"
import { useState, useEffect } from "react"
import { categoryCtrl } from "@/api"
import { useFormik } from "formik"
import { initalValue, validationSchema } from "@/schema/product.form"
import { Editor } from "@tinymce/tinymce-react"
import { productsCtrl } from "@/api"

export default function FormNewProduct(props) {
    const { status, dataProduct } = props;


    const [categories, setCategories] = useState(null)

    useEffect(() => {
        (async () => {
            try {
                const response = await categoryCtrl.getAll();
                setCategories(response)
            } catch (error) {
                console.log("error:", error)
            }

        })()
    }, [])


    const formik = useFormik({
        validationSchema: validationSchema(),
        initialValues: initalValue(dataProduct),
        validateOnChange: false,
        onSubmit: async (values) => {
            try {
                if (dataProduct) {

                } else {
                    await productsCtrl.create(values)
                    status()
                }

            } catch (error) {
                console.log(error)
            }
        }
    })



    return (
        <div className="flex-col flex mt-4  w-full">
            <>
                <form className="flex flex-col gap-">
                    <div className="flex mb-4 justify-around">
                        <Input
                            className="w-[350px] font-roboto"
                            name="ProdTitle" placeholder="Nombre"
                            onChange={formik.handleChange}
                            value={formik.values.ProdTitle}
                            errorMessage={formik.errors.ProdTitle}
                            color="primary"
                            variant="underlined"
                        />


                        <Input
                            className="w-[350px]  font-roboto"
                            name="ProdPath"
                            placeholder="Slug"
                            onChange={formik.handleChange}
                            value={formik.values.ProdPath}
                            errorMessage={formik.errors.ProdPath}
                            color="primary"
                            variant="underlined"
                        />
                    </div>

                    <div className="flex justify-center">
                        <Editor
                            apiKey='sfsvnkoj6v1ashuv5g4ha3cr1t5ertmy3gnxw3xz4zoygwv5'

                            init={{
                                height: 300,
                                width: 850,
                                menubar: true,
                                plugins: [
                                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                                ],
                                toolbar: 'undo redo | blocks | ' +
                                    'bold italic forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                    'removeformat | help',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                            }}
                            initialValue={formik.values.ProdDescription}
                            onBlur={(event) => formik.setFieldValue("ProdDescription", event.target.getContent())}
                        />
                    </div>


                    <div className="flex flex-col gap-2 mt-4 ml-6">
                        {<Select
                            className="w-[650px] font-roboto"
                            color="primary"
                            variant="underlined"
                            name="ProdCategId"
                            label="Seleccione la categoria"
                            value={formik.values.ProdCategId}
                            errorMessage={formik.errors.ProdCategId}
                            onChange={(e) => formik.setFieldValue("ProdCategId", Number(e.target.value))}
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
                            color="primary"
                            variant="underlined"
                            value={formik.values.ProdStock}
                            errorMessage={formik.errors.ProdStock}
                        />

                        <Input
                            type="number"
                            name="ProdPrice"
                            placeholder="Precio"
                            className="w-[325px]  font-roboto"
                            onChange={formik.handleChange}
                            value={formik.values.ProdPrice}
                            color="primary"
                            variant="underlined"
                            errorMessage={formik.errors.ProdPrice}
                        />


                    </div>




                </form>
                <div className="flex justify-center">
                    <Button isLoading={formik.isSubmitting} onClick={formik.handleSubmit} className="w-[450px]  mt-4 bg-success-300  font-poppins " >
                        Enviar
                    </Button>
                </div>

            </>
        </div >
    )
}
