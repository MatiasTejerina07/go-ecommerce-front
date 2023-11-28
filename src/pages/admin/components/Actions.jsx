import { Delete, Edit, Image } from "@/icon/icons";
import { useState } from "react";
import Modal from "./Modal";
import ModalNewImagen from "./ModalNewImagen";




export default function Actions(props) {
    const { dataProduct } = props;
    const [showModal, setShowModal] = useState({
        edit: false,
        image: false,
        delete: false
    })




    return (
        <div className="flex gap-1">

            <button onClick={() => setShowModal({ edit: true, image: false, delete: false })} className="hover:bg-success-300 rounded-md px-1 py-1">
                <Edit />
            </button>
            <button onClick={() => setShowModal({ image: true, edit: false, delete: false })} className="hover:bg-blue-300 rounded-md px-1 py-1">
                <Image />
            </button>
            <button onClick={() => setShowModal({ delete: true, edit: false, image: false })} className="hover:bg-red-300 rounded-md px-1 py-1">
                <Delete />
            </button>


            {
                showModal.edit &&
                (<Modal dataProduct={dataProduct} close={() => setShowModal(!showModal)} />)
            }

            {
                showModal.image &&
                (<ModalNewImagen dataProduct={dataProduct} close={() => setShowModal(!showModal)} />)
            }
        </div>
    )
}
