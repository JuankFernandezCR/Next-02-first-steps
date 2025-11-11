import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface PokemonsFavoriteState {
    favorites: { 
        [key: string]: SimplePokemon 
    }
}

const getInitialState = (): PokemonsFavoriteState => {
    const favorites = JSON.parse(localStorage.getItem('favorites-pokemons') ?? '{}');
    return favorites;
}


const initialState: PokemonsFavoriteState = {
    favorites: {},
};

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {

        setFavoritePokemons: ( state, action: PayloadAction<{[key: string]: SimplePokemon}>) => {
            state.favorites = action.payload;
        },

        toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {

            const pokemon = action.payload;
            const { id } = pokemon;

            if (!!state.favorites[id]) {
                delete state.favorites[id];
                return;
            } else {
                state.favorites[id] = pokemon;
            }

            // TODO: NO SE DEBE DE HACER DE ESTA FORMA EN REDUX
            localStorage.setItem('favorites-pokemons', JSON.stringify(state.favorites));
            
        },

    }
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions

export default pokemonsSlice.reducer