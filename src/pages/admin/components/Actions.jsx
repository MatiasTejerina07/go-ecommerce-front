import { Delete, Edit, Image } from "@/icon/icons";

export default function Actions() {
    return (
        <div className="flex gap-1">
            <button className="hover:bg-success-300 rounded-md px-1 py-1"><Edit /></button>
            <button className="hover:bg-blue-300 rounded-md px-1 py-1"><Image /></button>
            <button className="hover:bg-red-300 rounded-md px-1 py-1"><Delete /></button>
        </div>
    )
}
