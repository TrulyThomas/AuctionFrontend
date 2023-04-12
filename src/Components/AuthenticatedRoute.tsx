import React, { useState, FC, useEffect } from 'react'
import useAuth from '../Context/AuthenticationProvider'
import { useLocation, useNavigate } from 'react-router-dom'

interface IAuthRouteProps {
   children: React.ReactElement
}

const AuthenticatedRoute: FC<IAuthRouteProps> = (props) => {
   const navigate = useNavigate()
   const { user } = useAuth()
   const location = useLocation()
   useEffect(() => {
      if (!user) navigate('/Login?' + location.pathname)
   }, [user])

   return (
      <>
         {user && props.children}
         {
            !user && (
               <>Loading..xd.</>
            ) /* TODO HERE THERE SHOULD BE A BEAUTIFUL SHIMMER */
         }
      </>
   )
}
export default AuthenticatedRoute
