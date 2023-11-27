import * as Yup from "yup"

export function initalValue() {
    return {
        ProdTitle: "",
        ProdDescription: "",
        ProdPrice: "",
        ProdStock: "",
        ProPath: "",
        ProCategId: "",
    }
}

export function validationSchema() {
    return Yup.object({
        ProdTitle: Yup.string().required("El nombre es obligatorio"),
        ProdDescription: Yup.string().required("La descripción es obligatoria"),
        ProdPrice: Yup.number().required("El precio es obligatorio"),
        ProdStock: Yup.number().required("El stock es obligatorio"),
        ProPath: Yup.string().required("La imagen es obligatoria"),
        ProCategId: Yup.number().required("La categoría es obligatoria"),
    })
}