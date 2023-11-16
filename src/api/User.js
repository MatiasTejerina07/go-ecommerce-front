import { ENV } from "@/utils"
import { Auth } from "@aws-amplify/auth"

async function me() {
    try {
        const session = await Auth.currentSession()
        const { accessToken } = session
        console.log(accessToken.jwtToken)

        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USER_ME}`;
        const params = {
            headers: {
                Authorization: accessToken.jwtToken,

            }
        }

        const response = await fetch(url, params);
        const result = await response.json();
        if (response.status !== 200) throw result
        return result
    } catch (error) {

    }
}

export const userCtrl = { me }