import { useParams } from 'react-router-dom'
import React from 'react'
import { useQuery } from '@apollo/client'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { SideDrawer } from '../Components/Drawer'
import Images from '../Components/Images'
import { graphql } from '../Types/gql'
import { green, red } from '@mui/material/colors'

function Landing() {
   const { id } = useParams()
   const GET_ITEM_BY_ID = graphql(`
      query GetSingleItemShow($id: Int!) {
         getItem(id: $id) {
            name
            text
            id
            initialPrice
            quantity
            images {
               base64data
               order
               id
            }
         }
      }
   `)
   const { loading, error, data } = useQuery(GET_ITEM_BY_ID, {
      skip: !!!id,
      variables: { id: parseInt(id ?? '0') }
   })

   if (loading) return <p>Loading...</p>
   if (error) return <p>Something went wrong</p>
   if (data?.getItem == null) return <p>No such item</p>

   return (
      <div className="App">
         <Container>
            <Box sx={{ marginTop: '1rem' }}>
               <Grid container spacing={4}>
                  <Grid item sm={12} md={6}>
                     <Images
                        images={data.getItem.images?.map(
                           (i: any) => i.base64data
                        )}
                     />
                  </Grid>
                  <Grid item sm={12} md={6}>
                     <Grid item xs={12}>
                        <Typography variant="h4" gutterBottom>
                           {data.getItem.name}
                        </Typography>
                        <Typography
                           variant="h4"
                           gutterBottom
                           color={green[500]}
                        >
                           {data.getItem.initialPrice} DKK
                        </Typography>
                        <Typography
                           variant="h6"
                           gutterBottom
                           style={{ whiteSpace: 'pre-wrap' }}
                           sx={{ m: 1 }}
                        >
                           {data.getItem.text}
                        </Typography>
                        <Typography
                           sx={{ fontSize: '.92em' }}
                           color={
                              data.getItem.quantity > 0 ? green[500] : red[500]
                           }
                           gutterBottom
                        >
                           {data.getItem.quantity} in stock
                        </Typography>
                     </Grid>
                     <Grid item xs={12}>
                        <Button
                           sx={{ marginTop: '1rem' }}
                           size="large"
                           variant="contained"
                        >
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
