import { Search } from "@/layouts/ViewUser/components"
import ButtonAdd from "@/components/ButtonAdd"
import { useState, useEffect } from "react"
import { productsCtrl } from "@/api"
import LoadingData from "./LoadingData";
import TableList from "./Table";
import Pagination from "./Pagination";
import { useRouter } from "next/router";

const ITEMS_PER_PAGE = 10;

export default function Products() {
    const router = useRouter();
    const { query } = router;
    const [products, setProducts] = useState(null)
    const [totalPage, setTotalPage] = useState(null)
    const page = Number(query.page) || 1;


    useEffect(() => {
        (async () => {
            try {
                const searchText = query.searchAdmin || ""
                const response = await productsCtrl.getAll(1, 10, searchText)
                setProducts(response.data || [])
                const total = Math.ceil(response.totalItems / ITEMS_PER_PAGE)
                setTotalPage(total)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [query.page, query.searchAdmin])

    if (!products) return <LoadingData title="Cargando productos" className="-translate-x-1/2 top-1/2 left-1/2" />;

    return (
        <div className="w-full h-full">
            <div className="flex justify-between">
                <Search queryName="searchAdmin" className={"w-[300px]"} />
                <ButtonAdd name="Add Product" />
            </div>
            <div className="mt-4 ">
                <TableList data={products} />
            </div>
            <div className="flex  mt-6 justify-center">
                <Pagination totalPage={totalPage} initialPage={page} />
            </div>
        </div>

    )
}
