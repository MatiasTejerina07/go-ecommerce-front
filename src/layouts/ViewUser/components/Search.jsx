import { Input } from "@nextui-org/react"
import { SearchIn } from "@/icon/icons"
import { useRouter } from "next/router"


export default function Search({ className, queryName = "search" }) {
    const router = useRouter();
    const inputValue = router.query[queryName] || "";


    const onChange = (data) => {
        if (data.target.value) {
            router.replace({ query: { ...router.query, [queryName]: data.target.value } })
        } else {
            clearSearch()
        }

    }

    const clearSearch = () => {
        const newQuery = router.query;
        delete newQuery[queryName]
        router.replace({ query: newQuery })
    }

    return (
        <div>
            <Input value={inputValue}
                title="hola"
                onChange={onChange}
                placeholder="Buscar"
                endContent={<SearchIn />}
                className={className} variant="flat" />
        </div>
    )
}
