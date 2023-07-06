import React, { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react'
import Cookies from 'js-cookie'
import { Account } from '../Types/graphql'
import { trpcReact } from '../utils/trpcClient'

export interface IAuthenticationContext {
   user: Account
   setUser: React.Dispatch<React.SetStateAction<Account>>
   login: (email: string, password: string) => Promise<void>
   logout: () => void
}

const AuthContext = createContext<IAuthenticationContext>({} as IAuthenticationContext)

export const AuthenticationProvider = ({ children }: { children: ReactNode }) => {
   // const loginQuery = trpcReact.user.login.useQuery({ email: email, password: password }, { enabled: false })

   const loginQuery = trpcReact.user.login.useMutation()

   const [user, setUser] = useState<Account>({} as Account)

   const logout = () => {
      Cookies.remove('accessToken')
      setUser(null as any)
   }

   const login = (_email: string, _password: string): Promise<void> => {
      return new Promise(async (resolve, reject) => {
         const data = await loginQuery.mutateAsync({ email: _email, password: _password })

         if (data == null) {
            return reject('Login failed')
         }

         Cookies.set('accessToken', data.accessToken.token, { expires: data.accessToken.expiresInDays })
         setUser(data.account)
         return resolve()
      })
   }

   useEffect(() => {
      console.log(user)
   }, [user])

   const memoedValue = useMemo(
      () => ({
         user,
         setUser,
         login,
         logout
      }),
      [user]
   )

   return <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
}

export default function useAuth() {
   return useContext(AuthContext)
}
