import Image from "next/image";
import PokemonData from "../../../components/PokemonData";
const getDetailPokemon = async (name: string) => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name}?key=${process.env.API_KEY}`
  );
  return res.json();
};

const getEnv = async () => {
  const res = await fetch("https://invoice.stg.mauju.com/secret", {
    method: "POST",
  });
  return res.json();
};

const PokemonDetail = async ({ params }: { params: any }) => {
  const pokemon = await getDetailPokemon(params.name);
  const env = await getEnv();
  return (
    <div
      style={{
        width: "50%",
        margin: "auto",
        height: "auto",
        textAlign: "center",
      }}
    >
      <PokemonData pokemon={pokemon} />
      <div style={{ width: "200px", whiteSpace: "nowrap" }}>
        Logs : {env.REACT_APP_XENDIT_DEV_KEY}
      </div>
    </div>
  );
};

export default PokemonDetail;
