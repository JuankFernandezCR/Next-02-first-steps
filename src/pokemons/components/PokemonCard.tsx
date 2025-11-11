'use client';


import Link from 'next/link'
import { SimplePokemon } from '../interfaces/simple-pokemons'
import Image from 'next/image'
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '@/store';
import { toggleFavorite } from '@/store/pokemons/pokemons';

interface Props {
    pokemon: SimplePokemon
}

export const PokemonCard = ({ pokemon }: Props) => {

    const { id, name } = pokemon;
    const isFavorite = useAppSelector(state => !!state.pokemons.favorites[pokemon.id]);
    const dispatch = useAppDispatch();

    // console.log('isFavorite', isFavorite);

    const onToggle = () => {
        dispatch(toggleFavorite(pokemon));
    }

    return (
        <div className="mx-auto right-0 mt-2 w-60">
            <div className="bg-white rounded overflow-hidden shadow-lg">
                <div className="text-center p-6 bg-gray-800 border-b">
                    <Image
                        className="h-24 w-24 text-white mx-auto"
                        key={pokemon.id}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                        width={100}
                        height={100}
                        alt={name}
                        loading="lazy"
                    />
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
                    <div className="mt-5">
                        <Link
                            href={`pokemons/${name}`}
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                            More information
                        </Link>
                    </div>
                </div>
                <div className="border-b">
                    <div onClick={onToggle} className="px-4 py-2 hover:bg-gray-100 flex justify-center items-center cursor-pointer">
                        <div className="text-green-600">
                            {isFavorite ? <FaHeart className="text-red-600 w-5 h-5" /> : <FaRegHeart className="text-red-600 w-5 h-5" />}
                        </div>
                        <div className="pl-3">
                            <p className="text-lg font-medium text-gray-800 leading-none">
                                {isFavorite ? 'Favorite' : 'Not favorite'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
