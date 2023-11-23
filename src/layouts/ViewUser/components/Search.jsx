import { Input } from "@nextui-org/react"
import { SearchIn } from "@/icon/icons"

export default function Search({ className }) {
    return (
        <div>
            <Input title="hola" placeholder="Buscar" endContent={<SearchIn />} className={className} variant="flat" />
        </div>
    )
}
