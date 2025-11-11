'use client';

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { useEffect, useState } from "react";



export const FavoritePokemons = () => {

  const favoritePokemons = useAppSelector(state => Object.values(state.pokemons.favorites));
  const [pokemons, setFavoritePokemons] = useState(favoritePokemons);

  // useEffect(() => {
  //   setFavoritePokemons(favoritePokemons);
  // }, [favoritePokemons])


  return (
    <>
      {
        favoritePokemons.length === 0
          ? <NoFavorites />
          : <PokemonGrid pokemons={favoritePokemons} />
      }
    </>
  )
}

export const NoFavorites = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-2xl">No Favorite Pokemons</h2>
      <p className="text-gray-500">You haven't added any pokemons to your favorites yet.</p>
    </div>
  );
};
