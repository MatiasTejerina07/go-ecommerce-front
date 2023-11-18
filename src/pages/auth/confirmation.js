import { useRouter } from "next/router"
import { Input } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "../../schema/confirmation"
import { AuthAws } from "@/api/auth"

export default function ConfirmationPage() {
    const router = useRouter();
    const { query } = router;

    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: initialValues(),
        validateOnChange: false,
        validationSchema: validationSchema(),
        onSubmit: async (formValue) => {
            formValue.email = query.email
            try {
                await AuthAws.confirmSignUp(query?.email, formValue.code)
                router.push("/auth/login")
            } catch (error) {
                console.log("hoola", error)
            }
        }
    });


    const onResendCode = async () => {
        setLoading(true)
        AuthAws.reSendCode(query.email)
        setLoading(false)
    }



    return (
        <div className={loading ? "w-full h-full cursor-progress" : "w-full h-full"}>
            <div className="flex h-screen justify-center items-center ">
                <div className="w-[80%] bg-white h-[80%] flex ring-1 rounded-3xl shadow-2xl shadow-slate-800">
                    <div className="flex justify-center items-center w-[50%]">
                        <img src="/images/2889130.jpg" alt="logo" />
                    </div>
                    <div className="w-[50%] flex justify-center items-center">
                        <div className="mt-2 flex flex-col items-center">
                            <h1 className="font-poppins text-[25px] text-center font-light">
                                Te hemos enviado un email para validar tu correo
                            </h1>
                            <form >

                                <Input
                                    name="code"
                                    errorMessage={formik.errors.code}
                                    type="password"

                                    variant="bordered"
                                    color="primary"

                                    className="pt-10 w-[540px]"
                                    placeholder="Tu codigo"
                                    onChange={formik.handleChange}
                                    value={formik.values.code}
                                />

                            </form>
                            <p className="font-roboto pt-10 pb-5 text-center text-[18px] font-thin pr-4">
                                Porque lo que más nos importa es tu seguridad,<br />te pedimos que verifiques tu cuenta.
                            </p>
                            <Button isLoading={formik.isSubmitting} onClick={formik.handleSubmit} className="font-poppins bg-emerald-300" >
                                Verificar cuenta
                            </Button>
                            <p className="pt-5 font-roboto text-[14px] font-thin">¿Aún no te ha llegado el código? Haz clíck en <span onClick={onResendCode} className="underline hover:text-blue-500 hover:cursor-pointer">reenviar código</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
