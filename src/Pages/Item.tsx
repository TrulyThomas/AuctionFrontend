import { useParams } from 'react-router-dom'
import React from 'react'
import { useQuery, gql } from '@apollo/client'

function Landing() {
  const { id } = useParams()
  const GET_ITEM_BY_ID = gql`
    query GetSingleItem($id: Int!) {
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
  console.log(data)
  return (
    <div className="App">
      {data.getItem.name} {data.getItem.text}
    </div>
  )
}

export default Landing
