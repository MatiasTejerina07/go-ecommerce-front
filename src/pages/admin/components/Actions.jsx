import { Delete, Edit, Image } from "@/icon/icons";
import { useState } from "react";
import Modal from "./Modal";




export default function Actions(props) {
    const { dataProduct } = props;
    const [showModal, setShowModal] = useState(false);

    const handleEdit = () => {
        setShowModal(!showModal)
        console.log(dataProduct)
    }

    return (
        <div className="flex gap-1">
            <button onClick={handleEdit} className="hover:bg-success-300 rounded-md px-1 py-1"><Edit /></button>
            <button className="hover:bg-blue-300 rounded-md px-1 py-1"><Image /></button>
            <button className="hover:bg-red-300 rounded-md px-1 py-1"><Delete /></button>
            {
                showModal &&
                (<Modal dataProduct={dataProduct} close={() => setShowModal(!showModal)} />)
            }
        </div>
    )
}
