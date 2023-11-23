
export default function TableList(props) {
    const { data } = props;


    return (

        <table className="w-full h-full">
            <tbody className="justify-center flex flex-col">
                <tr className="flex justify-center bg-slate-100 py-2 rounded-t-lg ring-1 font-roboto">
                    <td className="w-[20%] text-center">ID</td>
                    <td className="w-[20%] text-center">Image</td>
                    <td className="w-[20%] text-center">Name</td>
                    <td className="w-[20%] text-center">Precio</td>
                    <td className="w-[20%] text-center">Stock</td>
                </tr>

                {data.map((product, index) => (
                    <tr key={index} className="flex justify-around" >
                        <td className="w-[20%] text-center">{product.prodID}</td>
                        <td className="w-[20%] text-center">Name</td>
                        <td className="w-[20%] text-center">{product.prodTitle}</td>
                        <td className="w-[20%] text-center">Precio</td>
                        <td className="w-[20%] text-center">{product.prodStock}</td>

                    </tr>
                ))}
            </tbody>
        </table>
    );
}
