import { Close } from "@/icon/icons"
import { useDropzone } from "react-dropzone";
import { Button, Image } from "@nextui-org/react";
import { useState } from "react";
import { useCallback } from "react";


export default function ModalNewImagen(props) {
    const { close, dataProduct } = props;
    const [loading, setLoading] = useState(false)

    const onDrop = useCallback((acceptedFile) => {
        console.log(acceptedFile)
    })

    const { getInputProps, getRootProps } = useDropzone({
        accept: "image/jpeg",
        onDrop

    })

    const getMiniature = () => {
        return null
    }

    return (
        <div className="fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-50  ring-blue-300 ring-2 rounded-lg">
            <div className="w-[600px] h-[300px] bg-white shadow-2xl shadow-black/50 rounded-lg">
                <div className="flex justify-end pr-1 pt-1">
                    <button onClick={close}>
                        <Close />
                    </button>
                </div>
                <div className="">

                    <h3 className="font-poppins ml-4">Editar ({dataProduct.prodTitle})</h3>
                </div>
                <div className="p-2 mb-2" {...getRootProps()}>
                    <input {...getInputProps()} />
                    {getMiniature() ?
                        <Image
                            isBlurred
                            width={240}
                            src={getMiniature()}
                            alt={dataProduct.prodTitle}
                            classNames="m-5"
                        />
                        :
                        (<div className="w-full h-40 border-dashed border-blue-300 border-2 rounded-lg flex justify-center items-center cursor-pointer">
                            <span className="">arrastra la nueva imagen</span>
                        </div>
                        )
                    }
                </div>
                <div className="flex justify-center items-center">
                    <Button className="w-[300px] bg-success-300 shadow-2xl shadow-black/50 font-roboto">
                        Guardar
                    </Button>
                </div>
            </div>
        </div>
    )
}
