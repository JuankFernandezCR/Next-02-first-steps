import { FavoritePokemons, PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";


export const metadata = {
 title: 'Favorites',
 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
};


export default async function FavoritesPage() {

    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Favorites Pokemons <small>Global State</small></span>
            <FavoritePokemons />
        </div>
    );
}
