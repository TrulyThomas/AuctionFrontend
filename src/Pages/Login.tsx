import {
   Box,
   Button,
   Container,
   Stack,
   TextField,
   Typography
} from '@mui/material'
import useAuth from '../Context/AuthenticationProvider'
import { useLocation, useNavigate } from 'react-router-dom'
import React, { FC, useState, useEffect } from 'react'

export const Login = () => {
   const [prevURL, setPrevURL] = useState<string>('/')
   const { login } = useAuth()
   const navigate = useNavigate()
   const location = useLocation()
   useEffect(() => {
      setPrevURL(location.search.slice(1))
      console.log(location.search.slice(1))
   }, [])
   return (
      <Container
         sx={{
            display: 'flex',
            minHeight: '100vh',
            justifyContent: 'center',
            alignItems: 'center'
         }}
      >
         <Box boxShadow={2} borderRadius={2}>
            <Box sx={{ padding: '1rem' }}>
               <Stack spacing={3}>
                  <Typography variant="h5" gutterBottom>
                     Login
                  </Typography>
                  <Stack direction="row" spacing={2}>
                     <TextField
                        required
                        fullWidth
                        id="text"
                        label="Username"
                        variant="outlined"
                     />
                     <TextField
                        required
                        fullWidth
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                     />
                  </Stack>
                  <Stack
                     sx={{
                        alignItems: 'center',
                        justifyContent: 'center'
                     }}
                     spacing={3}
                     direction="row"
                  >
                     <Button
                        variant="contained"
                        onClick={() => {
                           login('hey', '123').then(() => navigate(prevURL))
                        }}
                     >
                        Login
                     </Button>
                     <Button
                        color="primary"
                        variant="text"
                        onClick={() => {
                           navigate('/CreateAccount')
                        }}
                     >
                        Sign Me Up for an Account
                     </Button>
                  </Stack>
               </Stack>
            </Box>
         </Box>
      </Container>
   )
}
