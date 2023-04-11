import { useParams } from 'react-router-dom'
import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Box, Container, Typography } from '@mui/material'
import { SideDrawer } from '../Components/Drawer'

function Landing() {
   const { id } = useParams()
   const GET_ITEM_BY_ID = gql`
      query GetSingleIteSm($id: Int!) {
         getItem(id: $id) {
            name
            text
         }
      }
   `
   const { loading, error, data } = useQuery(GET_ITEM_BY_ID, {
      skip: !!!id,
      variables: { id: parseInt(id ?? '0') }
   })

   if (loading) return <p>Loading...</p>
   if (error) return <p>Something went wrong</p>
   if (data.getItem == null) return <p>No such item</p>

   return (
      <div className="App">
         <Container maxWidth="sm">
            <SideDrawer></SideDrawer>
            <Typography variant="h2" gutterBottom>
               {data.getItem.name} {data.getItem.text}
            </Typography>
         </Container>
      </div>
   )
}

export default Landing
