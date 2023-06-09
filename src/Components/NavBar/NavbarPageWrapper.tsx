import { Box, AppBar, Fade, Collapse } from '@mui/material'
import React, { FC } from 'react'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import AuctionAppBar from './AuctionAppBar'

interface INavBarProps {
   children: React.ReactElement
}

const NavbarPageWrapper: FC<INavBarProps> = (props) => {
   const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 50
   })

   return (
      <>
         <Box sx={{ display: 'flex' }}>
            <AuctionAppBar toolbarVariant={trigger} />
         </Box>
         <Box
            component="main"
            sx={{ paddingTop: '5rem', paddingLeft: '5%', paddingRight: '5%' }}
         >
            {props.children}
         </Box>
      </>
   )
}
export default NavbarPageWrapper
