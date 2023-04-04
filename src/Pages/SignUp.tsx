import {
   Box,
   Button,
   Container,
   Stack,
   TextField,
   Typography
} from '@mui/material'
import useAuth from '../Context/AuthenticationProvider'
import { useNavigate } from 'react-router-dom'

export function SignUp() {
   const { login } = useAuth()
   const navigate = useNavigate()
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
                     Sign Up
                  </Typography>
                  <TextField
                     required
                     fullWidth
                     id="text"
                     label="Email"
                     variant="outlined"
                  />
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
                        autoComplete="new-password"
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
                           login('hey', '123').then(() => navigate('/'))
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
               </Stack>
            </Box>
         </Box>
      </Container>
   )
}
