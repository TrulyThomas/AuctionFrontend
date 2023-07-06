import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Stack, Divider, Box } from '@mui/material'
import AuctionStack from '../Components/AuctionStack'
import { trpcReact } from '../utils/trpcClient'
const item_placeholder_image: string = require('../item_placeholder_image.svg').default

function Landing() {
   const { isLoading, error, data } = trpcReact.item.getAll.useQuery()

   if (isLoading) return <p>Loading...</p>
   if (error) return <p>Error : {error.message}</p>

   return (
      <>
         {data && data.length > 0 && (
            <AuctionStack itemsPerRow={3}>
               {data?.map((item) => {
                  return (
                     <Card>
                        <CardActionArea>
                           <CardMedia
                              component="img"
                              height="220"
                              image={item?.images?.[0]?.base64data || item_placeholder_image} //
                              alt="Auction Image"
                           />
                           <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                                 {item.name}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                 {item.text}
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
