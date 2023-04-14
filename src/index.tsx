import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import NavbarPageWrapper from './Components/NavBar/NavbarPageWrapper'
import Landing from './Pages/Landing'
import Items from './Pages/Items'
import Item from './Pages/Item'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EditItem from './Pages/EditItem'
import { AuthenticationProvider } from './Context/AuthenticationProvider'
import { Login } from './Pages/Login'
import AuthenticatedRoute from './Components/AuthenticatedRoute'
import { AuctionThemeProvider } from './Context/ModeHook'
import { SignUp } from './Pages/SignUp'

const client = new ApolloClient({
   uri: 'http://localhost:4000/graphql',
   cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const routes = [
   {
      path: '/',
      element: (
         <NavbarPageWrapper>
            <Landing />
         </NavbarPageWrapper>
      )
   },
   {
      path: '/items',
      element: (
         <AuthenticatedRoute>
            <NavbarPageWrapper>
               <Items />
            </NavbarPageWrapper>
         </AuthenticatedRoute>
      )
   },
   {
      path: '/item/:id',
      element: (
         <AuthenticatedRoute>
            <NavbarPageWrapper>
               <Item />
            </NavbarPageWrapper>
         </AuthenticatedRoute>
      )
   },

   {
      path: '/item/edit/:id',
      element: (
         <AuthenticatedRoute>
            <NavbarPageWrapper>
               <EditItem />
            </NavbarPageWrapper>
         </AuthenticatedRoute>
      )
   },
   {
      path: '/Login',
      element: <Login />
   },
   {
      path: '/CreateAccount',
      element: <SignUp />
   }
]

root.render(
   <React.StrictMode>
      <ApolloProvider client={client}>
         <AuthenticationProvider>
            <AuctionThemeProvider>
               <RouterProvider router={createBrowserRouter(routes)} />
            </AuctionThemeProvider>
         </AuthenticationProvider>
      </ApolloProvider>
   </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
