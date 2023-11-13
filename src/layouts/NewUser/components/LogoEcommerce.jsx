import Link from "next/link"


export default function Logo({ image }) {
    return (
        <div className="flex justify-center mt-16">
            <Link href={"/"}>
                <img className="w-24 h-24" src={image} alt="logo" />
            </Link>
        </div>
    )
}
