import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";



export const localStorageMiddleware = ( state: MiddlewareAPI ) => {
    return (next: Dispatch) => (actions: Action) => {
        next(actions);
        
        if ( actions.type === 'pokemons/toggleFavorite' ) {
            const { pokemons } = state.getState() as RootState;
            localStorage.setItem('favorites-pokemons', JSON.stringify(pokemons));
            return;
        }
    }
}