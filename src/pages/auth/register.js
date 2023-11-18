import NewUser from "@/layouts/NewUser/NewUser"
import Logo from "@/layouts/NewUser/components/LogoEcommerce"
import Data from "@/layouts/NewUser/components/Data"
import { Button } from "@nextui-org/react"
import Link from "next/link"
import { Input } from "@nextui-org/react";
import { IconEmail, IconPassword } from "@/icon/icons";
import { useState } from "react";
import { AuthAws } from "@/api/auth"
import { useFormik } from "formik"
import { useRouter } from "next/router"
import { initialValues, validationSchema } from "../../schema/register"


export default function RegisterPage() {

    const router = useRouter();

    const formik = useFormik({
        initialValues: initialValues(),
        validateOnChange: false,
        validationSchema: validationSchema(),
        onSubmit: async (formValue) => {

            try {
                await AuthAws.register(
                    formValue.email,
                    formValue.password
                )
                router.push(`/auth/confirmation?email=${formValue.email}`)
            } catch (error) {
                console.log(error)
            }
        }
    })




    return (

        <NewUser >
            <Logo image={"/images/ecommerce.jpg"} />
            <Data />
            <div>
                <form className="flex flex-col gap-3">
                    <Input
                        name="email"
                        onChange={formik.handleChange}
                        type="email"
                        value={formik.values.email}
                        label="Email"
                        errorMessage={formik.errors.email}
                        variant="bordered"
                        color="primary"
                        className="font-roboto w-96"
                        labelPlacement="inside" endContent={<IconEmail />}
                    />
                    <Input
                        name="password"
                        onChange={formik.handleChange}
                        type="password"
                        value={formik.values.password}
                        label="Contraseña"
                        errorMessage={formik.errors.password}
                        variant="bordered"
                        color="primary"
                        className="font-roboto w-96"
                        labelPlacement="inside" endContent={<IconPassword />}
                    />
                    <Input
                        name="repeatpassword"
                        onChange={formik.handleChange}
                        type="password"
                        values={formik.values.repeatpassword}
                        label="Repite la contraseña"
                        errorMessage={formik.errors.repeatpassword}
                        variant="bordered"
                        color="primary"
                        className="font-roboto w-96"
                        labelPlacement="inside" endContent={<IconPassword />}
                    />
                </form>
            </div>
            <div className="flex flex-col gap-4">
                <Link className="font-poppins -tracking-wider text-[14px] decoration-slice underline  hover:text-[#4338CA] hover:decoration-indigo-400 text-center" href={"/auth/login"}>
                    Ya tengo una cuenta
                </Link>
                <Button onClick={formik.handleSubmit} isLoading={formik.isSubmitting} type="submit" cas={Link} href="/auth/login" className=" w-96 bg-indigo-300/40 font-poppins hover:bg-indigo-300/80 hover:shadow-slate-400 hover:shadow-2xl duration-700 hover:transition-all ease-soft-spring ">
                    Crear cuenta
                </Button>
            </div>
        </NewUser>
    )
}
