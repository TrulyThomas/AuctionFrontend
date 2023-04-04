import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import NavBar from './Components/NavBar/NavBar'
import Landing from './Pages/Landing'
import Items from './Pages/Items'
import Item from './Pages/Item'
import NewItem from './Pages/NewItem'
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
         <NavBar>
            <Landing />
         </NavBar>
      )
   },
   {
      path: '/items',
      element: (
         <AuthenticatedRoute>
            <NavBar>
               <Items />
            </NavBar>
         </AuthenticatedRoute>
      )
   },
   {
      path: '/item/:id',
      element: (
         <AuthenticatedRoute>
            <NavBar>
               <Item />
            </NavBar>
         </AuthenticatedRoute>
      )
   },
   {
      path: '/item/new',
      element: (
         <AuthenticatedRoute>
            <NavBar>
               <NewItem />
            </NavBar>
         </AuthenticatedRoute>
      )
   },
   {
      path: '/item/edit/:id',
      element: (
         <AuthenticatedRoute>
            <NavBar>
               <EditItem />
            </NavBar>
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
