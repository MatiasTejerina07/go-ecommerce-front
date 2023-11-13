import { Auth } from "aws-amplify"


async function register(email, password) {
    try {
        const response = await Auth.signUp({
            username: email,
            password,
        })
        return response
    } catch (error) {
        throw error
    }
}

export const AuthAws = { register }