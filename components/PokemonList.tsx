"use client";

import { useRouter } from "next/navigation";
import React from "react";

const PokemonList = ({ pokemons }: any) => {
  const router = useRouter();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
        overflowY: "auto",
      }}
    >
      {pokemons.results.map((pokemon: any, index: number) => (
        <div
          key={index}
          style={{
            width: "40%",
            border: "1px solid gray",
            margin: "10px",
            textAlign: "center",
            cursor: "pointer",
          }}
          onClick={() => router.push(`/pokemon/${pokemon.name}`)}
        >
          <h1 style={{ textTransform: "capitalize" }}>{pokemon.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
