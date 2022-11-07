import './App.css';
import React from 'react';
import Navbar from './components/navbar';
import { SearchBar } from './components/search-bar';
import { searchPokemon } from './api';

function App() {

  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    console.log(result);
  }

  return (
    <div>
      <Navbar />
      <SearchBar 
        onSearch={onSearchHandler}
      />
      <div className="App">
      </div>
    </div>
  );
}

export default App;
