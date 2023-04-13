import { Box, Button, Grid, Hidden, IconButton, Stack } from '@mui/material'
import { useState } from 'react'
import AuctionStack from './AuctionStack'
import { ArrowBackIos, ArrowForwardIos, PhotoCamera } from '@mui/icons-material'

export default function Images(props: {
   images: string[] | undefined
}) {
   const [currentImage, setCurrentImage] = useState(0)

   if (props.images == undefined) return <></>

   return (
      <>
         <Box>
            <Box overflow={'hidden'} position={'relative'}>
               <img
                  style={{
                     aspectRatio: '1/1',
                     width: '100%',
                     marginBottom: '1rem'
                  }}
                  src={props.images[currentImage]}
               />
            </Box>
            <AuctionStack itemsPerRow={4}>
               {props.images.map((image, i) => {
                  return (
                     <>
                        <img
                           key={'imgImage' + i}
                           style={{
                              aspectRatio: '1/1',
                              overflow: 'hidden',
                              width: '100%'
                           }}
                           onClick={() => setCurrentImage(i)}
                           src={image}
                        />
                     </>
                  )
               })}
            </AuctionStack>
         </Box>
      </>
   )
}
