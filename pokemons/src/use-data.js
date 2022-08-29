import React from "react";
import { PokemonsContext } from "./pokemons-context";

const useData = () => {
  const { pokemons, loading } = React.useContext(PokemonsContext);

  return { pokemons, loading };
};

export default useData;
