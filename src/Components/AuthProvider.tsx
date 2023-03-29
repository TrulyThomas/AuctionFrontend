import { createContext, ReactNode, useContext, useMemo, useState } from "react";

interface User {
    id: string;
    username: string;
    email: string;
    role: string;
}


export interface AuthContextType {
    user?: User;
}

export interface AdditionalContextProps {
    login: (username: string, password: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType>(
    {} as AuthContextType
);



export const AuthProvider = ({ children }: { children: ReactNode; })  => {
    const [user, setUser] = useState<User>();
    const [loadingInitial, setLoadingInitial] = useState<boolean>(true)

    const logout = () => {
    }
    const login = (username: string, password: string) => {
    }
    const validateUser = (): void => {

    }


    const memoedValue = useMemo(
        () => ({
            user
        }),
        [user]
    );

    return (
        <AuthContext.Provider value={memoedValue}>
            {children}
        </AuthContext.Provider>
    );
}

export default function useAuth() {
    return useContext(AuthContext);
}