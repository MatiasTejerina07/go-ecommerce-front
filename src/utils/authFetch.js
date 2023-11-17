import { AuthAws } from "@/api/Auth"

export async function authFetch(url, params) {
    const token = await AuthAws.retrieveSession();
    console.log(token)

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