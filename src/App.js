import './App.css';
import React from 'react';
import Navbar from './components/navbar';
import { SearchBar } from './components/search-bar';

function App() {
  return (
    <div>
      <Navbar />
      <SearchBar/>
      <div className="App">
      </div>
    </div>
  );
}

export default App;
