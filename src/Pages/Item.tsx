import { useParams } from 'react-router-dom'
import React from 'react'
import { useQuery, gql } from '@apollo/client'

function Landing() {
  const { id } = useParams()
  const GET_ITEM_BY_ID = gql`
  query GetItemById($id : number!) {
    name
  }
`
  const { loading, error, data } = useQuery(GET_ITEM_BY_ID, {
    variables: {id}
  })
  
  if (loading) return <p>Loading...</p>
  if (error) return <p>{id}</p>
  console.log(data)
  return <div className="App">{data.name}</div>
}

export default Landing
