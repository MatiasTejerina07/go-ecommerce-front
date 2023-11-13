import { useRouter } from "next/router"
import { Input } from "@nextui-org/react";

export default function ConfirmationPage() {
    const { query } = useRouter();
    console.log(query)
    return (
        <div className="w-full h-full">
            <div className="flex h-screen justify-center items-center ">
                <div className="w-[80%] bg-white h-[80%] flex ring-1 rounded-3xl shadow-2xl shadow-slate-800">
                    <div className="flex justify-center items-center w-[50%]">
                        <img src="/images/2889130.jpg" alt="logo" />
                    </div>
                    <div className="w-[50%] flex justify-center items-center">
                        <div className="mt-2 flex flex-col items-center">
                            <h1 className="font-poppins text-[25px] text-center">
                                Te hemos enviado un email para validar tu correo
                            </h1>
                            <Input className="pt-10 w-[540px]" />
                            <p className="font-roboto pt-10 text-center text-[18px] font-thin pr-8">
                                Porque lo que más nos importa es tu seguridad, te pedimos que verifiques tu cuenta.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
