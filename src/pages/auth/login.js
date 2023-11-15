import React from 'react'
import NewUser from '@/layouts/NewUser/NewUser'
import Logo from '@/layouts/NewUser/components/LogoEcommerce'
import Datalogin from './components/Data.login'

export default function LoginPage() {
    return (
        <NewUser>
            <Logo image={"/images/ecommerce.jpg"} />
            <Datalogin />
            <div>
                algo
            </div>
        </NewUser>
    )
}
