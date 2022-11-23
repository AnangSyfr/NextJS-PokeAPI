"use client";
import Image from "next/image";
import React, { useState } from "react";

const PokemonData = ({ pokemon }: { pokemon: any }) => {
  const [img, setImg] = useState(pokemon.sprites.front_default);
  return (
    <>
      <h1>{pokemon.name}</h1>
      <Image src={img} alt={pokemon.name} width={200} height={200} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <button onClick={() => setImg(pokemon.sprites.back_default)}>
          Back
        </button>
        <button onClick={() => setImg(pokemon.sprites.front_default)}>
          Front
        </button>
      </div>
    </>
  );
};

export default PokemonData;
