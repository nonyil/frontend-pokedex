import React from "react";

const Navbar = () => {
  const logoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <nav>
      <div>
        <img 
        src={logoImg}
        alt="poke-api-logo"
        className="navbar-img"
        />
      </div>
    </nav>
  )
}

export default Navbar;