import React from "react";
import { useState } from "react";
import { searchPokemon } from "../api";

export const SearchBar = () => {
  const [search, setSearch] = useState("dito");
  const [pokemon, setPokemon] = useState();
  const onChangeHandler = (event) => {
    setSearch(event.target.value);
  }

  const onButtonClickHandle = () => {
    onSearchHandler(search);
    console.log("pokemon", search)
  }

  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    setPokemon(result)
  }
  
  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input 
        placeholder="Buscar Pokemon" 
        type="text" 
        onChange={onChangeHandler}
        />
        <div className="searchbar-btn">
          <button onClick={onButtonClickHandle}>Search</button>
        </div>
        {pokemon ? (
          <div>
            <div>Name: {pokemon.name}</div>
            <div>Peso: {pokemon.weight}</div>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </div>
        ): null}
      </div>
    </div>
  )
}
