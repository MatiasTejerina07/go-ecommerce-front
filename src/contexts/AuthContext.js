import { useEffect, useState, createContext } from "react";

export const AuthContext = createContext();

export function AuthProvider(props) {
    const { children } = props;
    const hardData = {
        user: "Matias",
    }

    return (
        <AuthContext.Provider value={hardData}>
            {children}
        </AuthContext.Provider>
    )

}