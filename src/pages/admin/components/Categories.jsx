import ButtonAdd from "@/components/ButtonAdd"

export default function Categories() {
    return (
        <div>
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold">Categorías</h1>

                <ButtonAdd name="Add Categoría" />
            </div>
        </div>
    )
}
