import { useParams } from 'react-router-dom'
import React from 'react'
import { useQuery } from '@apollo/client'
import {
   Card,
   CardActionArea,
   CardMedia,
   CardContent,
   Typography,
   CardActions,
   Button,
   Stack,
   Divider,
   Box
} from '@mui/material'
import { graphql } from '../Types/gql'
import AuctionStack from '../Components/AuctionStack'

const GET_ITEMS = graphql(/* GraphQL */ `
   query GetItems {
      allItems {
         name
         text
         images {
            url
         }
      }
   }
`)

function Landing() {
   const { loading, error, data } = useQuery(GET_ITEMS)

   if (loading) return <p>Loading...</p>
   if (error) return <p>Error : {error.message}</p>

   return (
      <>
         {data && data.allItems.length > 0 && (
            <AuctionStack itemsPerRow={2}>
               {data?.allItems.map((item) => {
                  return (
                     <Card>
                        <CardActionArea>
                           <CardMedia
                              component="img"
                              height="140"
                              image={
                                 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Orange_juice_1.jpg/1200px-Orange_juice_1.jpg'
                              }
                              alt="Auction Image"
                           />
                           <CardContent>
                              <Typography
                                 gutterBottom
                                 variant="h5"
                                 component="div"
                              >
                                 {'No title'}
                              </Typography>
                              <Typography
                                 variant="body2"
                                 color="text.secondary"
                              >
                                 {'Click to see more'}
                              </Typography>
                           </CardContent>
                        </CardActionArea>
                     </Card>
                  )
               })}
            </AuctionStack>
         )}
      </>
   )
}

export default Landing
