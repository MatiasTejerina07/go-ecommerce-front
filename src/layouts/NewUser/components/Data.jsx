import { data } from "./ofData.js"


export default function Data() {
    return (
        <div>
            {data.map((item, index) => (
                <div key={index}>
                    <div className="flex items-center justify-start gap-2 mt-4">
                        {typeof item.icon === "function" ? item.icon() : null}
                        <h1 className="font-Poppins text-[17px]">{item.title}</h1>
                    </div>
                    <p className="font-Roboto font-extralight">{item.description}</p>
                </div>
            ))}
        </div>
    )
}
