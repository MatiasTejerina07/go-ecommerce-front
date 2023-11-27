import { Button } from "@nextui-org/react"


export default function ButtonAdd(props) {
    const { name, onClick } = props
    return (
        <Button onClick={onClick} className="bg-success-200 px-3 font-poppins font-thin text-[13px]  ease-out duration-500 hover:shadow-lg hover:bg-success-300 hover:font-normal shadow-black/25">{name}</Button>
    )
}


