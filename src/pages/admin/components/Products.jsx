import Modal from "./Modal";
import { useState, useEffect } from "react"
import { productsCtrl } from "@/api"
import LoadingData from "./LoadingData";
import TableList from "./Table";
import Pagination from "./Pagination";
import { useRouter } from "next/router";
import { Search } from "@/layouts/ViewUser/components";
import ButtonAdd from "@/components/ButtonAdd";
const ITEMS_PER_PAGE = 8;

export default function Products() {

    const router = useRouter();
    const { query } = router;
    const [products, setProducts] = useState(null)
    const [totalPage, setTotalPage] = useState(null)
    const page = Number(query.page) || 1;
    const [showModal, setShowModal] = useState(false)


    useEffect(() => {
        (async () => {
            try {
                const searchText = query.searchAdmin || ""
                const response = await productsCtrl.getAll(page, ITEMS_PER_PAGE, searchText)
                setProducts(response.data || [])
                const total = Math.ceil(response.totalItems / ITEMS_PER_PAGE)
                setTotalPage(total)
                console.log(total)
            } catch (error) {
                console.log(error)
            }

        })()
    }, [query.page, query.searchAdmin, showModal])



    if (!products) return <LoadingData title="Cargando productos" className="-translate-x-1/2 top-1/2 left-1/2" />;

    const openModal = () => {
        setShowModal(!showModal)
    }



    return (
        <div className="w-full h-full">
            <div className="">
                <div className="flex justify-between mb-2">
                    <Search queryName="searchAdmin" className={"w-[300px]"} />
                    <ButtonAdd onClick={openModal} name="Add Product" />
                    {
                        showModal && (
                            <Modal close={openModal} />
                        )
                    }
                </div>

                {<TableList data={products} close={showModal} />}

            </div>
            <div className="flex  mt-6 justify-center">
                <Pagination totalPage={totalPage} initialPage={page} />
            </div>
        </div>

    )
}
