import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Pages/Landing'
import reportWebVitals from './reportWebVitals'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import NavBar from './Components/NavBar/NavBar'
import Landing from './Pages/Landing'
import Items from './Pages/Items'
import Item from './Pages/Item'
import NewItem from './Pages/NewItem'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthProvider } from './Components/AuthProvider'
import EditItem from './Pages/EditItem'

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
         <NavBar>
            <Items />
         </NavBar>
      )
   },
   {
      path: '/item/:id',
      element: (
         <NavBar>
            <Item />
         </NavBar>
      )
   },
   {
      path: '/item/new',
      element: (
         <NavBar>
            <NewItem />
         </NavBar>
      )
   },
   {
      path: '/item/edit/:id',
      element: (
         <NavBar>
            <EditItem />
         </NavBar>
      )
   }
]

root.render(
   <React.StrictMode>
      <ApolloProvider client={client}>
         <AuthProvider>
            <RouterProvider router={createBrowserRouter(routes)} />
         </AuthProvider>
      </ApolloProvider>
   </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
