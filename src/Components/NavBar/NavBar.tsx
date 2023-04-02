import {
   Box,
   CssBaseline,
   AppBar,
   Toolbar,
   IconButton,
   Typography,
   Button,
   Link,
   ThemeProvider,
   useMediaQuery,
   createTheme
} from '@mui/material'
import React, { useState, FC } from 'react'
import HomeIcon from '@mui/icons-material/Home'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

interface INavBarProps {
   children: React.ReactElement
}
interface NavItem {
   displayName: string
   href: string
}
const NavBar: FC<INavBarProps> = (props) => {
   const navItems: NavItem[] = [
      { displayName: 'Items', href: '/items' },
      { displayName: 'My Fav Item', href: '/item/1' },
      { displayName: 'New Item', href: '/item/new' }
   ]
   const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
   const [dark, setDark] = useState<boolean>(prefersDarkMode)

   const theme = React.useMemo(
      () =>
         createTheme({
            palette: {
               mode: dark ? 'dark' : 'light'
            }
         }),
      [dark]
   )

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
         <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex' }}>
               <CssBaseline />
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
                     <IconButton onClick={() => setDark(!dark)}>
                        {theme.palette.mode === 'dark' ? (
                           <Brightness7Icon />
                        ) : (
                           <Brightness4Icon />
                        )}
                     </IconButton>
                     <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((navItem, i) => {
                           return renderNavItem(navItem, i)
                        })}
                     </Box>
                  </Toolbar>
               </AppBar>
            </Box>
            <Box component="main" sx={{ p: 3 }}>
               {props.children}
            </Box>
         </ThemeProvider>
      </>
   )
}
export default NavBar
