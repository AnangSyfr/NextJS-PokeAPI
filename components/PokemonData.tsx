"use client";
import React, { useState } from "react";

const PokemonData = ({ pokemon }: { pokemon: any }) => {
  const [img, setImg] = useState(pokemon.sprites.front_default);
  return (
    <>
      {" "}
      <h1>{pokemon.name}</h1>
      <img src={img} width={200} alt={pokemon.name} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <button onClick={() => setImg(pokemon.sprites.back_default)}>
          Back Default
        </button>
        <button onClick={() => setImg(pokemon.sprites.front_default)}>
          Fron Default
        </button>
      </div>
    </>
  );
};

export default PokemonData;
