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

async function reSendCode(email) {
    try {
        await Auth.resendSignUp(email)
    } catch (error) {
        throw error
    }
}

async function confirmSignUp(email, code) {
    try {
        await Auth.confirmSignUp(email, code)
        return true;
    } catch (error) {
        throw error
    }
}
async function login(email, password) {
    try {
        await Auth.signIn({
            username: email,
            password
        })
        const session = await Auth.currentAuthenticatedUser({
            bypassCache: false
        })
        return session
    } catch (error) {
        throw error
    }
}

async function retrieveSession() {
    try {
        const session = await Auth.currentSession({
            bypassCache: false
        })
        return session.accessToken.jwtToken
    } catch (error) {
        throw error
    }
}

async function logout() {
    try {
        await Auth.signOut()
    } catch (error) {

    }
}


export const AuthAws = { register, reSendCode, confirmSignUp, login, retrieveSession, logout }