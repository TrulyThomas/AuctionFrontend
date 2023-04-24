import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material'
import useAuth from '../Context/AuthenticationProvider'
import { useNavigate } from 'react-router-dom'
import { gql, useMutation } from '@apollo/client'
import { useEffect, useState } from 'react'
import { red } from '@mui/material/colors'

export function SignUp() {
   const { login } = useAuth()
   const navigate = useNavigate()

   const [email, setEmail] = useState<string>('')
   const [username, setUsername] = useState<string>('')
   const [password, setPassword] = useState<string>('')
   const [signUpFailed, setSignUpFailed] = useState<boolean>(false)

   const CREAT_USER = gql`
      mutation CreateUser($username: String!, $password: String!, $email: String!) {
         signup(email: $email, username: $username, password: $password) {
            username
         }
      }
   `
   const [createUser, { data, loading, error }] = useMutation(CREAT_USER)

   useEffect(() => {
      if (error) setSignUpFailed(true)
   }, [error])

   async function handelSignUp() {
      const newUser = await createUser({ variables: { username: username, password: password, email: email } })

      if (newUser.data?.signup?.username) {
         login(email, password)
         navigate('/')
      } else setSignUpFailed(true)
   }

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
               <Stack spacing={2.5}>
                  <Typography variant="h5" gutterBottom>
                     Sign Up
                     {signUpFailed && (
                        <Typography sx={{ marginTop: 0.1 }} variant="body2" color={red[500]}>
                           Sign up failed, please try again
                        </Typography>
                     )}
                  </Typography>
                  <TextField
                     onChange={(e) => {
                        setEmail(e.target.value)
                     }}
                     error={signUpFailed}
                     required
                     fullWidth
                     id="text"
                     label="Email"
                     variant="outlined"
                  />
                  <Stack direction="row" spacing={2}>
                     <TextField
                        onChange={(e) => {
                           setUsername(e.target.value)
                        }}
                        error={signUpFailed}
                        required
                        fullWidth
                        id="text"
                        label="Username"
                        variant="outlined"
                     />
                     <TextField
                        onChange={(e) => {
                           setPassword(e.target.value)
                        }}
                        required
                        error={signUpFailed}
                        fullWidth
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="new-password"
                     />
                  </Stack>
                  <Box>
                     <Stack
                        marginTop={1}
                        sx={{
                           alignItems: 'center',
                           justifyContent: 'center'
                        }}
                        spacing={3}
                        direction="row"
                     >
                        <Button
                           disabled={!email.includes('@') || username == '' || password == ''}
                           variant="contained"
                           onClick={() => {
                              handelSignUp()
                           }}
                        >
                           Sign Up
                        </Button>
                        <Button
                           variant="text"
                           onClick={() => {
                              navigate('/Login')
                           }}
                        >
                           I already have an account
                        </Button>
                     </Stack>
                  </Box>
               </Stack>
            </Box>
         </Box>
      </Container>
   )
}
