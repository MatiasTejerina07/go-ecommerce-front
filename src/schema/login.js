import * as Yup from "yup"

export function initalValue() {
    return {
        email: "",
        password: ""
    }

}

export function validationSchema() {
    return Yup.object({
        email: Yup.string().email(true).required(true),
        password: Yup.string().required(true)
    })
}