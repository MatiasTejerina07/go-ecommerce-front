import * as Yup from "yup"

export function initalValue() {
    return {
        ProdTitle: "",
        ProdPath: "",
        ProdStock: "",
        ProdPrice: "",
        ProdCategId: "",
        /* 
        ProdDescription: "",
         */
    }
}

export function validationSchema() {
    return Yup.object({
        ProdTitle: Yup.string().required("El nombre es obligatorio"),
        ProdPath: Yup.string().required("La imagen es obligatoria"),
        ProdStock: Yup.number().required("El stock es obligatorio"),
        ProdPrice: Yup.number().required("El precio es obligatorio"),
        ProdCategId: Yup.number().required("La categoría es obligatoria"),
        /*  
        ProdDescription: Yup.string().required("La descripción es obligatoria"),
        */
    })
}