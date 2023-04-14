import { Box, Button, Grid, Hidden, IconButton, Stack } from '@mui/material'
import { useState } from 'react'
import AuctionStack from './AuctionStack'
import {
   ArrowBackIos,
   ArrowForwardIos,
   Clear,
   PhotoCamera
} from '@mui/icons-material'

export default function Images(props: {
   images: string[] | undefined
   edit: boolean | undefined
   deleteImages?: (deleteIndex: number) => void
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
                        {props?.edit && (
                           <Box>
                              <IconButton
                                 onClick={() => props.deleteImages!(i)}
                              >
                                 <Clear />
                              </IconButton>
                           </Box>

                           // <Stack
                           //    direction={'row'}
                           //    justifyContent="space-between"
                           // >
                           //    {i != 0 ? (
                           //       <IconButton
                           //          onClick={() => props.orderImages!(i, i - 1)}
                           //       >
                           //          <ArrowBackIos />
                           //       </IconButton>
                           //    ) : (
                           //       <div></div>
                           //    )}
                           //    {i != props.images?.length! - 1 ?? false ? (
                           //       <IconButton
                           //          onClick={() => props.orderImages!(i, i + 1)}
                           //       >
                           //          <ArrowForwardIos />
                           //       </IconButton>
                           //    ) : (
                           //       <div></div>
                           //    )}
                           // </Stack>
                        )}
                     </>
                  )
               })}
            </AuctionStack>
         </Box>
      </>
   )
}
