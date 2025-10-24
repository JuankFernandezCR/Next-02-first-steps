import Link from 'next/link'
import React from 'react'
import { SimplePokemon } from '../interfaces/simple-pokemons'
import { CiHeart } from "react-icons/ci";
import Image from 'next/image'

interface Props {
    pokemon: SimplePokemon
}

export const PokemonCard = ({ pokemon }: Props) => {

    const { id, name } = pokemon;

    return (
        <div className="mx-auto right-0 mt-2 w-60">
            <div className="bg-white rounded overflow-hidden shadow-lg">
                <div className="text-center p-6 bg-gray-800 border-b">
                    <Image
                        className="h-24 w-24 text-white mx-auto"
                        key={pokemon.id}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ id }.svg`}
                        width={100}
                        height={100}
                        alt={ name }
                        loading="lazy"
                    />
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{ name }</p>
                    <div className="mt-5">
                        <Link
                            href={`pokemon/${ id }`}
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                            More information
                        </Link>
                    </div>
                </div>
                <div className="border-b">
                    <Link href="#" className="px-4 py-2 hover:bg-gray-100 flex justify-center items-center">
                        <div className="text-green-600">
                            <CiHeart className="text-red-600 w-5 h-5"/>
                        </div>
                        <div className="pl-3">
                            <p className="text-lg font-medium text-gray-800 leading-none">
                                Not favorite
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
