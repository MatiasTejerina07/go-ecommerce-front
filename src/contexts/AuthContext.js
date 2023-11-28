import { useEffect, useState, createContext } from "react";
import { userCtrl, AuthAws } from "@/api"
import { useRouter } from "next/router";


export const AuthContext = createContext();

export function AuthProvider(props) {
    const { children } = props;
    const router = useRouter()
    const [user, setUser] = useState(null)
    const [isAdmin, setIsAdmin] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [reload, setReload] = useState(false)

    useEffect(() => {
        (async () => {
            try {
                await login()
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
            }
        })()
    }, [])

    const login = async () => {
        try {
            const response = await userCtrl.me()
            setUser(response)
            setIsAdmin(response.userStatus === 0)
            setIsLoading(false)

        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }

    const updateUser = (key, value) => {
        setUser({
            ...user,
            [key]: value
        })
    }

    const logout = () => {
        setUser(null)
        AuthAws.logout()
        router.push('/auth/login')
    }

    const onReload = () => setReload((prevState) => !prevState)



    const data = {
        user,
        login,
        isAdmin,
        logout,
        updateUser,
        reload
    }


    if (isLoading) return null

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )

}