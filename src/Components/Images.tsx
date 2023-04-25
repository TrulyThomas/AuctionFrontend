import { Box, Button, Grid, Hidden, IconButton, Stack } from '@mui/material'
import { useState } from 'react'
import AuctionStack from './AuctionStack'
import '../Css/style.css'
import {
   ArrowBackIos,
   ArrowForwardIos,
   Clear,
   PhotoCamera
} from '@mui/icons-material'

export default function Images(props: {
   images: string[] | undefined
   edit?: boolean | undefined
   deleteImages?: (deleteIndex: number) => void
}) {
   const [currentImage, setCurrentImage] = useState(0)
   const [newImage, setNewImage] = useState(false)

   if (props.images == undefined) return <></>

   return (
      <Box>
         <Box overflow={'hidden'} position={'relative'}>
            <img
               className={newImage ? 'mainNewImage' : 'mainImage'}
               src={props.images[currentImage]}
               onAnimationEnd={() => {
                  setNewImage(false)
               }}
            />
         </Box>
         <AuctionStack itemsPerRow={4}>
            {props.images.map((image, i) => {
               return (
                  <>
                     <img
                        key={'imgImage' + i}
                        className={
                           newImage && currentImage == i
                              ? 'newCurrentImage'
                              : 'myImage'
                        }
                        onClick={() => {
                           setNewImage(!newImage)
                           setCurrentImage(i)
                        }}
                        src={image}
                        style={{
                           filter: currentImage != i ? 'opacity(70%)' : ''
                        }}
                     />
                     {props?.edit && (
                        <Box>
                           <IconButton
                              onClick={() => {
                                 props.deleteImages!(i)
                              }}
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
   )
}
