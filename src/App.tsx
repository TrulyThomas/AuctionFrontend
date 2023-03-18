import React from 'react';
import logo from './logo.svg';
import { useQuery, gql } from '@apollo/client';
import './App.css';

const GET_RANDOM = gql`
  query GetRandom{
    quoteOfTheDay
    rollThreeDice
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_RANDOM);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  
  return (
    <div className="App">
      {data.rollThreeDice}
    </div>
  );
}

export default App;
