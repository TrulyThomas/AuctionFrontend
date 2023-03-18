import React from 'react'
import logo from './logo.svg'
import { useQuery, gql } from '@apollo/client'
import './App.css'

const GET_ITEMS = gql`
  query GetItems {
    allItems {
      name
    }
  }
`

function App() {
  const { loading, error, data } = useQuery(GET_ITEMS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>
  console.log(data)
  return <div className="App">{data.allItems.map((e : {name : string}, i : number) => data.allItems.length - 1 != i ? `${e.name}, ` : `${e.name}.` )}</div>
}

export default App
