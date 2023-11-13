import NewUser from "@/layouts/NewUser/NewUser"
import Logo from "@/layouts/NewUser/components/LogoEcommerce"
import Data from "@/layouts/NewUser/components/Data"
import { Button } from "@nextui-org/react"
import Link from "next/link"
import { Input } from "@nextui-org/react";
import { IconEmail, IconPassword } from "@/icon/icons";
import { useState } from "react";
import { AuthAws } from "@/api/Auth"
import { useFormik } from "formik"
import { initialValues, validationSchema } from "./components/RegisterForm.form"


export default function RegisterPage() {

    const formik = useFormik({
        initialValues: initialValues(),
        validateOnChange: false,
        validationSchema: validationSchema(),
        onSubmit: (formValue) => {
            console.log("send")
            console.log(formValue)
        }
    })




    return (

        <NewUser >
            <Logo />
            <Data />
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
                    labelPlacement="inside" endContent={<IconEmail />} />
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
                    labelPlacement="inside" endContent={<IconPassword />} />
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
                    labelPlacement="inside" endContent={<IconPassword />} />
            </form>
            <div className="flex flex-col gap-4">
                <Link className="font-poppins -tracking-wider text-[14px] decoration-slice underline  hover:text-[#4338CA] hover:decoration-indigo-400 text-center" href={"/"}>
                    Ya tengo una cuenta
                </Link>
                <Button onClick={formik.handleSubmit} isLoading={formik.isSubmitting} type="submit" cas={Link} href="/auth/login" className=" w-96 bg-indigo-300/40 font-poppins hover:bg-indigo-300/80 hover:shadow-slate-400 hover:shadow-2xl duration-700 hover:transition-all ease-soft-spring ">
                    Crear cuenta
                </Button>
            </div>
        </NewUser>
    )
}
