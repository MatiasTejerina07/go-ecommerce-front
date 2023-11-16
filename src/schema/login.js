import * as Yup from "yup"

export function initialValue() {
    return {
        email: "",
        password: ""
    }

}

export function validationSchema() {
    return Yup.object({
        email: Yup.string().email("Email requerido").required("Email es requerido"),
        password: Yup.string().required("La contraseña es requerida")
    })
}