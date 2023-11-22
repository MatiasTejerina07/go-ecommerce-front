import { useEffect, useState } from "react"
import { categoryCtrl } from "@/api/categories"
import Link from "next/link"


export default function Categories() {
    const [categories, setCategories] = useState(null)

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
            {categories && categories.map((category, index) =>
                <Link key={index} href={`/categories/${category.categPath}`}>
                    {category.categName}
                </Link>
            )}
        </div>
    )
}
