import * as Yup from "yup"

export function initialValues() {
    return {
        email: "",
        password: "",
        repeatpassword: ""
    }
}

export function validationSchema() {
    return Yup.object({
        email: Yup.string().email("Email invalído").required(true),
        password: Yup.string().required(true),
        repeatpassword: Yup.string().required(true).oneOf([Yup.ref("password")], "La contraseña no es igual")
    })
}