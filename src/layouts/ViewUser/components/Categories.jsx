import { useEffect, useState } from "react"
import { categoryCtrl } from "@/api/categories"
import Link from "next/link"
import { useRouter } from "next/router"


export default function Categories() {
    const [categories, setCategories] = useState(null)
    const { pathname } = useRouter();
    useEffect(() => {
        (async () => {
            try {
                const response = await categoryCtrl.getAll()
                setCategories(response)
            } catch (error) {
                throw error
            }
        })()
    }, [])

    return (
        <div>
            {pathname !== "/admin/admin" && categories && categories.map((category, index) =>
                <Link key={index} href={`/categories/${category.categPath}`}>
                    {category.categName}
                </Link>
            )}
        </div>
    )
}
