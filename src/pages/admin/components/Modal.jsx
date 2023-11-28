import { Close } from "@/icon/icons"
import FormNewProduct from "./FormNewProduct"


export default function Modal(props) {
    const { close, dataProduct } = props;




    return (
        <div className="fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-50  ring-blue-400 ring-2 rounded-lg">
            <div className="w-[900px] h-[700px] bg-white shadow-2xl shadow-black/50 rounded-lg">
                <div className="flex justify-end pr-1 pt-1">
                    <button onClick={close}>
                        <Close />
                    </button>
                </div>
                <h1 className="text-center font-poppins">{!dataProduct ? "Nuevo Producto" : `Editar ${dataProduct.prodTitle}`}</h1>
                <FormNewProduct status={close} dataProduct={dataProduct} />
            </div>
        </div>
    )
}
