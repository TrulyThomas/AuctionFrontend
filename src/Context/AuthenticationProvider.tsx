import React, { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react'
import { gql, useLazyQuery, useQuery } from '@apollo/client'
import Cookies from 'js-cookie'
import { Account } from '../Types/graphql'

export interface IAuthenticationContext {
   user: Account
   setUser: React.Dispatch<React.SetStateAction<Account>>
   login: (email: string, password: string) => Promise<void>
   logout: () => void
}

const AuthContext = createContext<IAuthenticationContext>({} as IAuthenticationContext)

export const AuthenticationProvider = ({ children }: { children: ReactNode }) => {
   const LOGIN = gql`
      query LoginUser($email: String!, $password: String!) {
         login(email: $email, password: $password) {
            account {
               username
               email
               createdDate
               role
            }
            accessToken {
               token
               expiresInDays
            }
         }
      }
   `

   const [handleLogin, { called, loading, data }] = useLazyQuery(LOGIN)
   const [user, setUser] = useState<Account>({} as Account)

   const logout = () => {
      Cookies.remove('accessToken')
      //setUser({} as Account)
   }

   const login = (email: string, password: string): Promise<void> => {
      return new Promise(async (resolve, reject) => {
         const res = await handleLogin({ variables: { email, password } })
         console.log(res)
         if (res.data == null) {
            return reject('Login failed')
         }
         Cookies.set('accessToken', res.data.login.accessToken.token, { expires: res.data.login.accessToken.expiresInDays })
         setUser(res.data.login.account)
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
