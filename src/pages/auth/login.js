import React from 'react'
import NewUser from '@/layouts/NewUser/NewUser'
import Logo from '@/layouts/NewUser/components/LogoEcommerce'

export default function LoginPage() {
    return (
        <NewUser>
            <Logo image={"/images/ecommerce.jpg"} />
            <div>
                <img className='w-[500px] h-[400px] rounded-2xl' src='/images/telefono.jpg' />
            </div>
            <div>
                algo
            </div>
        </NewUser>
    )
}
