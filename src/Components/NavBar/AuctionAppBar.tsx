import { Logout, Login } from '@mui/icons-material'
import './Toolbar.css'
import { AppBar, Toolbar, IconButton, Stack, Box, Button, useTheme, styled, Collapse } from '@mui/material'
import React, { useState, useRef, useEffect, FC, createRef } from 'react'
import usePalette from '../../Context/ModeHook'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import HomeIcon from '@mui/icons-material/Home'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../Context/AuthenticationProvider'

interface IAuctionAppBarProps {
   toolbarVariant: boolean
}
interface NavItem {
   displayName: string
   href: string
}
const AuctionAppBar: FC<IAuctionAppBarProps> = (props) => {
   const theme = useTheme()
   const { logout } = useAuth()
   const navigate = useNavigate()
   const { flipPaletteMode } = usePalette()
   const { user } = useAuth()
   const toolbarRef = useRef<HTMLDivElement>(null)
   const renderNavItem = (navItem: NavItem, i: number) => {
      return (
         <Button key={'navbar' + navItem.displayName + i} sx={{ color: 'inherit' }} href={navItem.href}>
            {navItem.displayName}
         </Button>
      )
   }

   function navBarElements() {
      let navbarElements = []

      navbarElements.push({ displayName: 'Items', href: '/items' } as NavItem)
      navbarElements.push({ displayName: 'Item', href: '/item/1' } as NavItem)

      if (['Admin', 'Seller'].includes(user.role)) {
         navbarElements.push({ displayName: 'New Item', href: '/item/edit/new' } as NavItem)
      }

      return navbarElements
   }

   const navItems: NavItem[] = navBarElements()

   useEffect(() => {
      console.log('running', props.toolbarVariant)
      if (props.toolbarVariant) {
         toolbarRef.current?.classList.add('resize')
      } else {
         toolbarRef.current?.classList.remove('resize')
      }
   }, [props.toolbarVariant])
   return (
      <AppBar position="fixed" component="nav" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
         <Toolbar ref={toolbarRef} className="resizeAnimation">
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} href="/">
               <HomeIcon />
            </IconButton>
            <IconButton onClick={() => flipPaletteMode()}>{theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}</IconButton>
            <Stack direction={'row'} justifyContent="space-between" spacing={2} sx={{ width: '100%' }}>
               <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                  {navItems.map((navItem, i) => {
                     return renderNavItem(navItem, i)
                  })}
               </Box>
               {Object.keys(user).length !== 0 && (
                  <Button color="inherit" variant="text" endIcon={<Logout />} onClick={() => logout()}>
                     Logout
                  </Button>
               )}
               {Object.keys(user).length === 0 && (
                  <Button color="inherit" variant="text" endIcon={<Login />} onClick={() => navigate('/Login')}>
                     Login
                  </Button>
               )}
            </Stack>
         </Toolbar>
      </AppBar>
   )
}

export default AuctionAppBar
