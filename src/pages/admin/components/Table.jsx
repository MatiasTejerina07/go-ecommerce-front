import Actions from "./Actions";

export default function TableList(props) {
    const { data } = props;


    return (

        <table className="w-full h-full">
            <tbody className="justify-center flex flex-col ring-1 rounded-lg">
                <tr className="flex justify-center bg-slate-100 py-2 rounded-t-lg border-b-1 border-blue-300  font-roboto">
                    <td className="w-[20%] text-center">ID</td>
                    <td className="w-[20%] text-center">Image</td>
                    <td className="w-[20%] text-center">Name</td>
                    <td className="w-[20%] text-center">Precio</td>
                    <td className="w-[10%] text-center">Stock</td>
                    <td className="w-[10%] text-center">Acciones</td>
                </tr>

                {data.map((product, index) => (
                    <tr key={index} className="flex justify-around" >
                        <td className="w-[20%] text-center">{product.prodID}</td>
                        <td className="w-[20%] text-center">Name</td>
                        <td className="w-[20%] text-center">{product.prodTitle}</td>
                        <td className="w-[20%] text-center">Precio</td>
                        <td className="w-[10%] text-center">{product.prodStock}</td>
                        <td className="w-[10%] flex justify-center"><Actions /></td>
                    </tr>

                ))}
            </tbody>
        </table>
    );
}
