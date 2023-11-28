import { ENV } from "@/utils"
import { authFetch } from "@/utils";

async function getAllProducts(page = 1, pageSize = 10, search = "") {
    try {
        const paginationFilter = `page=${page}&pageSize=${pageSize}`;
        const searchFilter = `search=${search}`;
        const filters = `${paginationFilter}&${searchFilter}`;
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCT}?${filters}`;

        const response = await fetch(url);
        const result = await response.json();
        if (response.status !== 200) throw result;
        return result;
    } catch (error) {
        throw error
    }
}

async function createProduct(product) {
    try {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCT}`;
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        }
        const response = await authFetch(url, params);
        if (response.status !== 201) throw response;
        return true;


    } catch (error) {
        throw error
    }
}

async function updateProduct(data, productId) {
    try {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCT}/${productId}`
        const params = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        const response = await authFetch(url, params)
        if (response.status !== 200) throw response
        return true;
    } catch (error) {
        throw error
    }
}


export const productsCtrl = {
    getAll: getAllProducts,
    create: createProduct,
    update: updateProduct
}