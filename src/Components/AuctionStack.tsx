import { Box, Stack } from '@mui/material'
import React, { FC, useState, useEffect, ReactElement, ReactNode } from 'react'

interface IAuctionStackProps {
   gap?: number
   children: ReactElement[] | ReactElement
   flexBasis?: string
   itemsPerRow: number
   itemHeight?: number | string
}

const AuctionStack: FC<IAuctionStackProps> = (props) => {
   let childrenArray = Array.isArray(props.children)
      ? props.children
      : [props.children]

   childrenArray = [
      ...childrenArray,
      ...Array(
         props.itemsPerRow - (childrenArray.length % props.itemsPerRow)
      ).map((_) => <div></div>)
   ]

   return (
      <>
         <Stack
            direction={'row'}
            justifyContent="space-between"
            flexWrap={'wrap'}
            gap={props.gap ?? 2}
         >
            {childrenArray.map((item, i) => {
               return (
                  <Box
                     key={'auctionItem ' + i}
                     sx={{
                        minHeight: props.itemHeight ?? '25%',
                        flexBasis: 100 / props.itemsPerRow - 3 + '%'
                     }}
                  >
                     {item}
                  </Box>
               )
            })}
         </Stack>
      </>
   )
}

export default AuctionStack
