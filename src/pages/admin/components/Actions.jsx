import { Delete, Edit, Image } from "@/icon/icons";

export default function Actions() {
    return (
        <div className="flex gap-1">
            <Edit />
            <Image />
            <Delete />
        </div>
    )
}
