import React from "react";
import { useState } from "react";

export const SearchBar = (props) => {
  const {onSearch} = props;
  const [search, setSearch] = useState("dito");
  const onChangeHandler = (event) => {
    setSearch(event.target.value);
  }

  const onButtonClickHandle = () => {
    onSearch(search);
    console.log("pokemon", search)
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
      </div>
    </div>
  )
}
