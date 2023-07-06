import { useParams } from 'react-router-dom'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import Images from '../Components/Images'
import { green, red } from '@mui/material/colors'
import { trpcReact } from '../utils/trpcClient'

function Landing() {
   const { id } = useParams()
   const { isLoading, error, data } = trpcReact.item.get.useQuery({ id: Number(id) })

   if (isLoading) return <p>Loading...</p>
   if (error) return <p>Something went wrong</p>
   if (data == null) return <p>No such item</p>

   return (
      <div className="App">
         <Container>
            <Box sx={{ marginTop: '1rem' }}>
               <Grid container spacing={4}>
                  <Grid item sm={12} md={6}>
                     <Images images={data.images?.map((i: any) => i.base64data)} />
                  </Grid>
                  <Grid item sm={12} md={6}>
                     <Grid item xs={12}>
                        <Typography variant="h4" gutterBottom>
                           {data.name}
                        </Typography>
                        <Typography variant="h4" gutterBottom color={green[500]}>
                           {data.initialPrice} DKK
                        </Typography>
                        <Typography variant="h6" gutterBottom style={{ whiteSpace: 'pre-wrap' }} sx={{ m: 1 }}>
                           {data.text}
                        </Typography>
                        <Typography sx={{ fontSize: '.92em' }} color={data.quantity > 0 ? green[500] : red[500]} gutterBottom>
                           {data.quantity} in stock
                        </Typography>
                     </Grid>
                     <Grid item xs={12}>
                        <Button sx={{ marginTop: '1rem' }} size="large" variant="contained">
                           Add to cart
                        </Button>
                     </Grid>
                  </Grid>
               </Grid>
            </Box>
         </Container>
      </div>
   )
}

export default Landing
