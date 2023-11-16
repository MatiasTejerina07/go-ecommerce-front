import React from 'react'
import NewUser from '@/layouts/NewUser/NewUser'
import Logo from '@/layouts/NewUser/components/LogoEcommerce'
import Datalogin from './components/Data.login'
import { Input, Button } from '@nextui-org/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import { IconEmail, IconPassword } from '@/icon/icons'
import { useAuth } from "@/hooks"
import { initialValue, validationSchema } from "@/schema/login"
import { AuthAws } from "@/api/Auth"
export default function LoginPage() {
    const router = useRouter()
    const { login } = useAuth()

    const formik = useFormik({
        initialValues: initialValue(),
        validateOnChange: false,
        validationSchema: validationSchema(),
        onSubmit: async (formValue) => {

            try {
                await AuthAws.login(formValue.email, formValue.password)
                await login()
            } catch (error) {
                console.log(error)
            }
        }
    })


    const handleNavigate = () => {
        router.push('/auth/register')
    }


    return (
        <NewUser>
            <Logo image={"/images/ecommerce.jpg"} />
            <Datalogin />
            <div className='flex flex-col gap-3'>
                <div className='pb-2'>
                    <h1 className='font-poppins text-[20px]'>¡Bienvenido!<br /> Ingresa tu email y contraseña</h1>
                </div>
                <form className='flex flex-col gap-3'>
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
                    <p className='text-[13px] text-center font-poppins'>¿No tienes una cuenta aun? <span onClick={handleNavigate} className="font-poppins -tracking-wider text-[13px] decoration-slice underline  hover:text-[#4338CA] hover:decoration-indigo-400 text-center hover:cursor-pointer">Comienza por aquí</span></p>

                </form>
                <Button onClick={formik.handleSubmit} isLoading={formik.isSubmitting} type='submit' className="  bg-indigo-300/40 font-poppins hover:bg-indigo-300/80 hover:shadow-slate-400 hover:shadow-2xl duration-700 hover:transition-all ease-soft-spring ">
                    Iniciar sesión
                </Button>
            </div>
        </NewUser>
    )
}
