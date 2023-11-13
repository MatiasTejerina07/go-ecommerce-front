import * as Yup from "yup"


export function initialValues() {


    return {
        email: "",
        code: ""
    }
}

export function validationSchema() {
    return Yup.object({
        code: Yup.string().required("El código es obligatorio"),
    });
}
