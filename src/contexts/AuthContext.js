import { useEffect, useState, createContext } from "react";
import { userCtrl } from "@/api/User"


export const AuthContext = createContext();

export function AuthProvider(props) {
    const { children } = props;

    const [user, setUser] = useState(null)
    const [isAdmin, setIsAdmin] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const login = async () => {
        try {
            const response = await userCtrl.me()
            console.log(response)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }
    const data = {
        user,
        login
    }

    if (isLoading) return null

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )

}