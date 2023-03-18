import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Link
} from '@mui/material'
import React, { useState, FC } from 'react'
import HomeIcon from '@mui/icons-material/Home'

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
    { displayName: 'My Fav Item', href: '/item/1' }
  ]

  const renderNavItem = (navItem: NavItem) => {
    return (
      <Button sx={{ color: 'inherit' }} href={navItem.href}>
        {navItem.displayName}
      </Button>
    )
  }

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="static" component="nav">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              href='/'
            >
              <HomeIcon />
            </IconButton>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((navItem) => {
                return renderNavItem(navItem)
              })}
            </Box>
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
