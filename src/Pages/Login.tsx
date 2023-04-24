import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material'
import useAuth from '../Context/AuthenticationProvider'
import { useLocation, useNavigate } from 'react-router-dom'
import React, { FC, useState, useEffect } from 'react'
import { red } from '@mui/material/colors'

export const Login = () => {
   const [prevURL, setPrevURL] = useState<string>('/')
   const [email, setEmail] = useState<string>('')
   const [password, setPassword] = useState<string>('')
   const [loginFailed, setLoginFailed] = useState<boolean>(false)
   const { login } = useAuth()
   const navigate = useNavigate()
   const location = useLocation()
   useEffect(() => {
      setPrevURL(location.search.slice(1) == '' ? '/' : location.search.slice(1))
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
            <Box sx={{ padding: '1.5rem' }}>
               <Stack spacing={2}>
                  <Typography variant="h5" gutterBottom>
                     Login
                     {loginFailed && (
                        <Typography sx={{ marginTop: 0.1 }} variant="body2" color={red[500]}>
                           Login failed, please try again
                        </Typography>
                     )}
                  </Typography>
                  <Stack direction="row" spacing={2}>
                     <TextField
                        required
                        error={loginFailed}
                        fullWidth
                        id="text"
                        label="Email"
                        variant="outlined"
                        onChange={(e) => {
                           setEmail(e.target.value)
                        }}
                     />
                     <TextField
                        required
                        error={loginFailed}
                        fullWidth
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        onChange={(e) => {
                           setPassword(e.target.value)
                        }}
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
                           login(email, password)
                              .then(() => navigate(prevURL))
                              .catch((e) => {
                                 console.log(e)
                                 setLoginFailed(true)
                              })
                        }}
                        disabled={!email.includes('@') || password == ''}
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
