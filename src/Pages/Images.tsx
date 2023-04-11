import { Box, Grid, Hidden, Stack } from '@mui/material'
import { useState } from 'react'

export default function Images(props: { images: string[] | undefined }) {
   const [currentImage, setCurrentImage] = useState(0)

   if (props.images == undefined) return <></>

   return (
      <>
         <Grid container spacing={2} overflow={'hidden'}>
            <Grid item xs={12}>
               <Box overflow={'hidden'} position={'relative'}>
                  <img
                     style={{
                        aspectRatio: '1/1',
                        width: '100%'
                     }}
                     src={'http://localhost:4000/image/1'}
                  />
               </Box>
            </Grid>

            <Box
               sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  p: 1,
                  m: 1,
                  bgcolor: 'background.paper',
                  borderRadius: 1,
                  width: '100%',
                  overflow: 'hidden',
                  justifyContent: 'center'
               }}
            >
               {props.images.map((image, i) => {
                  if (i == currentImage) return <></>

                  return (
                     <Box
                        marginLeft={1}
                        marginBottom={1}
                        key={'boxImage' + i}
                        overflow={'hidden'}
                        position={'relative'}
                        width={'22%'}
                        style={{
                           aspectRatio: '1/1'
                        }}
                     >
                        <img
                           key={'imgImage' + i}
                           style={{
                              aspectRatio: '1/1',
                              overflow: 'hidden',
                              width: '100%'
                           }}
                           src={image}
                        />
                     </Box>
                  )
               })}
            </Box>
         </Grid>
      </>
   )
}
