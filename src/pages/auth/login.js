import React from 'react'
import NewUser from '@/layouts/NewUser/NewUser'
import Logo from '@/layouts/NewUser/components/LogoEcommerce'
import Datalogin from './components/Data.login'
import { Input, Button } from '@nextui-org/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function LoginPage() {
    const router = useRouter()

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
                <Input variant='bordered' labelPlacement='inside' color='primary' type='email' label='Email' className='w-[300px]' />
                <Input variant='bordered' labelPlacement='inside' color='primary' type='password' label='Contraseña' className='w-[300px]' />
                <p className='text-[13px] text-center font-poppins'>¿No tienes una cuenta aun? <span onClick={handleNavigate} className="font-poppins -tracking-wider text-[13px] decoration-slice underline  hover:text-[#4338CA] hover:decoration-indigo-400 text-center hover:cursor-pointer">Comienza por aquí</span></p>

                <Button as={Link} href="/auth/register" className="  bg-indigo-300/40 font-poppins hover:bg-indigo-300/80 hover:shadow-slate-400 hover:shadow-2xl duration-700 hover:transition-all ease-soft-spring ">
                    Iniciar sesión
                </Button>
            </div>
        </NewUser>
    )
}
