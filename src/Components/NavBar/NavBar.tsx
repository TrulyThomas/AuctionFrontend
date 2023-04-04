import {
   Box,
   Stack,
   CssBaseline,
   AppBar,
   Toolbar,
   IconButton,
   Typography,
   Button,
   Link,
   ThemeProvider,
   useMediaQuery,
   createTheme,
   useTheme,
   Divider
} from '@mui/material'
import React, { useState, FC } from 'react'
import HomeIcon from '@mui/icons-material/Home'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import usePalette from '../../Context/ModeHook'
import useAuth from '../../Context/AuthenticationProvider'
import { Login, Logout } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

interface INavBarProps {
   children: React.ReactElement
}
interface NavItem {
   displayName: string
   href: string
}
const NavBar: FC<INavBarProps> = (props) => {
   const theme = useTheme()
   const { logout } = useAuth()
   const navigate = useNavigate()
   const { flipPaletteMode } = usePalette()
   const { user } = useAuth()
   const navItems: NavItem[] = user
      ? [
           { displayName: 'Items', href: '/items' },
           { displayName: 'My Fav Item', href: '/item/1' },
           { displayName: 'New Item', href: '/item/new' }
        ]
      : []

   const renderNavItem = (navItem: NavItem, i: number) => {
      return (
         <Button
            key={'navbar' + navItem.displayName + i}
            sx={{ color: 'inherit' }}
            href={navItem.href}
         >
            {navItem.displayName}
         </Button>
      )
   }

   return (
      <>
         <Box sx={{ display: 'flex' }}>
            <AppBar
               position="static"
               component="nav"
               sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
               <Toolbar>
                  <IconButton
                     size="large"
                     edge="start"
                     color="inherit"
                     aria-label="menu"
                     sx={{ mr: 2 }}
                     href="/"
                  >
                     <HomeIcon />
                  </IconButton>
                  <IconButton onClick={() => flipPaletteMode()}>
                     {theme.palette.mode === 'dark' ? (
                        <Brightness7Icon />
                     ) : (
                        <Brightness4Icon />
                     )}
                  </IconButton>
                  <Stack
                     direction={'row'}
                     justifyContent="space-between"
                     spacing={2}
                     sx={{ width: '100%' }}
                  >
                     <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((navItem, i) => {
                           return renderNavItem(navItem, i)
                        })}
                     </Box>
                     {user && (
                        <Button
                           color="inherit"
                           variant="text"
                           endIcon={<Logout />}
                           onClick={() => logout()}
                        >
                           Logout
                        </Button>
                     )}
                     {!user && (
                        <Button
                           color="inherit"
                           variant="text"
                           endIcon={<Login />}
                           onClick={() => navigate('/Login')}
                        >
                           Login
                        </Button>
                     )}
                  </Stack>
               </Toolbar>
            </AppBar>
         </Box>
         <Box component="main" sx={{ p: 3 }}>
            {props.children}
         </Box>
      </>
   )
}
export default NavBar
