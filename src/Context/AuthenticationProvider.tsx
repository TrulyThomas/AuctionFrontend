import React, { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react'
import { gql, useLazyQuery } from '@apollo/client'

export interface IAuthenticationContext {
   user: boolean
   login: (email: string, password: string) => Promise<void>
   logout: () => void
}

const AuthContext = createContext<IAuthenticationContext>({} as IAuthenticationContext)

export const AuthenticationProvider = ({ children }: { children: ReactNode }) => {
   const LOGIN = gql`
      query LoginUser($email: String!, $password: String!) {
         login(email: $email, password: $password) {
            username
         }
      }
   `
   const [handleLogin, { called, loading, data }] = useLazyQuery(LOGIN)
   const [user, setUser] = useState<boolean>(false)
   const [loadingInitial, setLoadingInitial] = useState<boolean>(true)

   const logout = () => {
      sessionStorage.setItem('LoginStatus', '0')
      validateUser()
   }

   const login = (email: string, password: string): Promise<void> => {
      return new Promise(async (resolve, reject) => {
         const res = await handleLogin({ variables: { email, password } })
         console.log(res)
         if (res.data == null) {
            return reject('Login failed')
         }
         sessionStorage.setItem('LoginStatus', '1')
         setUser(res.data)
         return resolve()
      })
   }

   const validateUser = (): void => {
      let loginStatus = sessionStorage.getItem('LoginStatus')
      setUser((loginStatus ?? '0') == '1')
   }

   useEffect(() => {
      console.log('this is called')
      validateUser()
      setLoadingInitial(false)
   }, [])

   const memoedValue = useMemo(
      () => ({
         user,
         login,
         logout
      }),
      [user]
   )

   return <AuthContext.Provider value={memoedValue}>{!loadingInitial && children}</AuthContext.Provider>
}

export default function useAuth() {
   return useContext(AuthContext)
}
