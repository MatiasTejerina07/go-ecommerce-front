import { Pagination as PaginationSU } from "@nextui-org/react";
import { useRouter } from "next/router";


export default function Pagination(props) {
    const { totalPage, initialPage } = props
    const router = useRouter();

    const onPageChange = (page) => {
        router.replace({ query: { ...router.query, page: page } })
    }

    return (
        <PaginationSU
            variant="flat"
            color="primary"
            showControls
            total={totalPage}
            initialPage={initialPage}
            onChange={(e) => onPageChange(e)}
        />
    );
}
