import React, {
   createContext,
   ReactNode,
   useContext,
   useEffect,
   useMemo,
   useState
} from 'react'

export interface IAuthenticationContext {
   user: boolean
   login: (username: string, password: string) => Promise<void>
   logout: () => void
}

const AuthContext = createContext<IAuthenticationContext>(
   {} as IAuthenticationContext
)

export const AuthenticationProvider = ({
   children
}: {
   children: ReactNode
}) => {
   const [user, setUser] = useState<boolean>(false)
   const [loadingInitial, setLoadingInitial] = useState<boolean>(true)

   const logout = () => {
      sessionStorage.setItem('LoginStatus', '0')
      validateUser()
   }

   const login = (username: string, password: string): Promise<void> => {
      return new Promise((resolve, reject) => {
         sessionStorage.setItem('LoginStatus', '1')
         setUser(true)
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

   return (
      <AuthContext.Provider value={memoedValue}>
         {!loadingInitial && children}
      </AuthContext.Provider>
   )
}

export default function useAuth() {
   return useContext(AuthContext)
}
