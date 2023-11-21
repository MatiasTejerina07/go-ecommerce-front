import { useEffect, useState } from "react"


export default function Categories() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async () => {
            try {
                console.log("first")
            } catch (error) {
                throw error
            }
        }
    }, [])


    return (
        <div>Categories</div>
    )
}
