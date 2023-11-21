import { Cart, User, Admin } from "@/icon/icons"
import { Badge } from "@nextui-org/react"
import Link from "next/link"
import { useAuth } from "@/hooks"

export default function GroupButtons() {
    const { user, isAdmin } = useAuth();


    const url = user ? "/auth/account" : "/auth/login"
    console.log(user)

    return (
        <div className='flex gap-6 items-center justify-center'>
            <Link className="font-roboto" href={'/admin/admin'}>
                {
                    isAdmin &&
                    (
                        <div className="flex gap-2 items-center justify-center">
                            <p className="font-poppins">Admin</p>
                            <Admin />
                        </div>
                    )}
            </Link>
            <Badge color="success" content={5} shape="circle" size="sm" placement="top-right">
                <Link className="font-roboto" href={'/cart'}>{<Cart />}</Link>
            </Badge>
            <Link className="font-roboto flex gap-2" href={url}>
                {<User />}
                {user ?
                    (user?.userEmail) :
                    (<p>Entrar</p>)
                }
            </Link>

        </div>
    )
}
