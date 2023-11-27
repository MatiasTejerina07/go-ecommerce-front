import Actions from "./Actions";
import { fn } from "@/utils"
import { useState, useEffect } from "react";
const NotFound = "/images/pcshop.jpg"


export default function TableList(props) {
    const { data } = props;
    const [image, setImage] = useState(NotFound)



    useEffect(() => {
        const imageUrl = fn.getUrl(data.forEach((item) => item))

        fn.checkImage(imageUrl, (exist) => {
            if (exist) setImage(imageUrl)
        })
    }, [])

    return (

        <table className="w-full  min-h-[50vh]">
            <tbody className="justify-center flex flex-col ring-1 rounded-lg">
                <tr className="flex justify-center bg-slate-100 py-2  rounded-t-lg border-b-1 border-blue-300  font-roboto">
                    <td className="w-[20%] text-center">ID</td>
                    <td className="w-[20%] text-center">Image</td>
                    <td className="w-[20%] text-center">Name</td>
                    <td className="w-[20%] text-center">Precio</td>
                    <td className="w-[10%] text-center">Stock</td>
                    <td className="w-[10%] text-center">Acciones</td>
                </tr>

                {data.map((product, index) => (


                    < tr key={index} className="flex justify-around items-center" >
                        <td className="w-[20%] text-center">{product.prodID}</td>
                        <td className="w-[20%] flex justify-center">
                            <img className="w-14 object-contain" src={image} />
                        </td>
                        <td className="w-[20%] text-center">{product.prodTitle}</td>
                        <td className="w-[20%] text-center">{String(product.prodPrice).length > 0 ? product.prodPrice : ""}</td>
                        <td className="w-[10%] text-center">{product.prodStock}</td>
                        <td className="w-[10%] flex justify-center"><Actions /></td>
                    </tr>


                ))}
            </tbody>
        </table >
    );
}
