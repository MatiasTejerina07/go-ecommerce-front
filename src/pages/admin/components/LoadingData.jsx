import { Spinner } from "@nextui-org/spinner"


export default function LoadingData(props) {
    const { title, className } = props

    return (
        <div>
            <Spinner size="xl" color="primary" label={title} className={className} />
        </div>
    )
}
