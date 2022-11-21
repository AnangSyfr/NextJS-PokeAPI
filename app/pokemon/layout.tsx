import React from "react";
import PokemonList from "../../components/PokemonList";
import Link from "next/link";

const getPokemon = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  return res.json();
};

const PokemonLayout = async ({ children }: { children: React.ReactNode }) => {
  const pokemons = await getPokemon();
  return (
    <div>
      <Link href={"/"}>Back</Link>
      <h3>Pokemon List</h3>
      <div style={{ display: "flex", width: "100vw", alignItems: "center" }}>
        <div style={{ width: "50%" }}>
          <PokemonList pokemons={pokemons} />
        </div>
        <div style={{ width: "50%" }}>
          <section>{children}</section>
        </div>
      </div>
    </div>
  );
};

export default PokemonLayout;
