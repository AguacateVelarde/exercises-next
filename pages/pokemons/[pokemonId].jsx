/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { pokemonService } from '../../services';

const MyPokemon = () => {
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(true);
    const [pokemon, setPokemon] = useState(null);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const { pokemonId } = router.query
        if (pokemonId) {
            pokemonService.getPokemonById(pokemonId)
            .then(({ data }) => {
                setPokemon(data);
            })
            .catch((error) => {
                setIsError(true);
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false);
            })
        }

    }, [router]);

    if (isLoading) {
        return <><p> Está cargando... </p> </>
    }

    if (isError) {
        return <> <p> {error} </p> </>
    }


    return <>
        <table>
            <tr>
                <th>id</th>
                <th>nombre</th>
                <th>habilidad</th>
                <th>Tipos</th>
            </tr>
            <tr>
                <td>{pokemon.id}</td>
                <td>{pokemon.name}</td>
                <td>{pokemon.abilities.map(({ ability }) => ability.name).join(', ')}</td>
                <td>{pokemon.types.map(({ type }) => type.name).join(', ')}</td>
            </tr>
        </table>

        <ul>
            {pokemon.stats.map(({ stat }, currentIndex) => <li key={`stat-${currentIndex}`}>{stat.name}</li>)}
        </ul>

        <ul>
            {pokemon.moves.map(({ move }, currentIndex) => <li key={`move-${currentIndex}`}>{move.name}</li>)}
        </ul>
        <img src={pokemon.sprites.other['official-artwork'].front_default} alt="my-pokemon" />
    </>

};

export default MyPokemon;