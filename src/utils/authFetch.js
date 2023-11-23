import { AuthAws } from "@/api/auth"

export async function authFetch(url, params) {
    const token = await AuthAws.retrieveSession();

    const logout = () => {
        AuthAws.logout()
        window.location.replace("/")
    }

    if (!token) {
        logout()
    } else {
        const paramsTemp = {
            ...params,
            headers: {
                ...params?.headers,
                Authorization: token
            }
        }

        try {
            return await fetch(url, paramsTemp)
        } catch (error) {
            throw error
        }
    }
}