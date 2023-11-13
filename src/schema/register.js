import * as Yup from "yup"

export function validateSchema(data) {
    return Yup.object({
        email: Yup.string().email("El email es invalido").required(true),
        password: Yup.string().required("Este campo es obligatorio"),
        repeatpassword: Yup.string().oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir").required("Este campo es obligatorio"),
    });
}