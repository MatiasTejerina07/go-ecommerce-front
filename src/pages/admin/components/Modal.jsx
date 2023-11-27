import { Close } from "@/icon/icons"
import FormNewProduct from "./FormNewProduct"


export default function Modal({ close }) {
    return (
        <div className="fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <div className="w-[700px] h-[400px] bg-white shadow-2xl shadow-black/50 rounded-lg">
                <div className="flex justify-end pr-1 pt-1">
                    <button onClick={close}>
                        <Close />
                    </button>
                </div>
                <h1 className="text-center font-poppins">Nuevo producto</h1>

                <FormNewProduct />
            </div>
        </div>
    )
}
