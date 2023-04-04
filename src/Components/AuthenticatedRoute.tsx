import React, { useState, FC, useEffect } from 'react'
import useAuth from '../Context/AuthenticationProvider'
import { useLocation, useNavigate } from 'react-router-dom'

interface IAuthRouteProps {
   children: React.ReactElement
}

const AuthenticatedRoute: FC<IAuthRouteProps> = (props) => {
   const navigate = useNavigate()
   const { user } = useAuth()
   useEffect(() => {
      // We have a problem of rendering twice with this navigation
      // We actually navigate twice, therefore the go back option doesn't work
      // Maybe we should have a development flag in some .json file
      // So we can convert to dev hardcoded values instead of live?
      if (!user) navigate('/Login')
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
