import React from 'react';
import './App.css';


import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/RowPost/Rowpost';
import { top_picks, trending } from './urls';

function App() {
  return (
    <div className="navbar">
      <Navbar />
      <Banner/>
      <Rowpost url={top_picks} title='Top picks for you'/>
      <Rowpost url={trending}title='Trending' isSmall/>
    </div>
  );
}

export default App;
