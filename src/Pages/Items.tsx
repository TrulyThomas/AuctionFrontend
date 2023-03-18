import { useParams } from 'react-router-dom'
import React from 'react'
import { useQuery, gql } from '@apollo/client'

const GET_ITEMS = gql`
  query GetItems {
    allItems {
      name
    }
  }
`

function Landing() {
  const { loading, error, data } = useQuery(GET_ITEMS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>
  console.log(data)
  return (
    <div className="App">
      {data.allItems.map((e: { name: string }) => `${e.name} `)}
    </div>
  )
}

export default Landing
