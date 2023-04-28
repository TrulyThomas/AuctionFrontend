import React, { useState, FC, useEffect } from 'react'
import useAuth from '../Context/AuthenticationProvider'
import { useLocation, useNavigate } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'
import Cookies from 'js-cookie'

interface IAuthRouteProps {
   children: React.ReactElement
   roles: string[]
}

const AuthenticatedRoute: FC<IAuthRouteProps> = (props) => {
   const navigate = useNavigate()
   const { user, setUser } = useAuth()
   const [roleValidate, setRoleValidate] = useState<boolean>(false)

   const VALIDATE = gql`
      query ValidateUser($token: String!) {
         validateUser(token: $token) {
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

   const { loading, error, data } = useQuery(VALIDATE, {
      variables: { token: Cookies.get('accessToken') ?? '' }
   })

   useEffect(() => {
      if (loading) return
      if (error) return navigate('/Login?' + window.location.pathname)

      Cookies.set('accessToken', data.validateUser.accessToken.token, { expires: data.validateUser.accessToken.expiresInDays })
      //setUser(data.validateUser.account)

      if (!props.roles.includes(data.validateUser.account.role)) return navigate('/Login?' + window.location.pathname)
      setRoleValidate(true)
   }, [data, loading])

   if (loading) return <p>Loading...</p>
   if (error) return <p>Something went wrong</p>

   return (
      <>
         {roleValidate && props.children}
         {loading && <>Loading..xd.</> /* TODO HERE THERE SHOULD BE A BEAUTIFUL SHIMMER */}
      </>
   )
}
export default AuthenticatedRoute
