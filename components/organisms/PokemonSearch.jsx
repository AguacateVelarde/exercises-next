import { useContext } from 'react';
import Search from '../molecules/Search';

import { SearchWordContext } from '../../contexts/search-word';

const PokemonItem = ({ index, pokemon }) => {
    const { dispatch } = useContext(SearchWordContext);
    const handleOnFav = () => {
        dispatch({ type: 'add-pokemon', pokemon });
    }
    const handleOnDelete = () => {
        dispatch({ type: 'delete', pokemon });
    }
    return (
        <li key={`my-pokemon-${index}`}>
            {pokemon}
            <button onClick={handleOnFav}> Guardar en favoritos </button>
            <button onClick={handleOnDelete}> Eliminar de favoritos </button>

        </li>
    );
}

const PokemonSearch = ({ pokemonsList, onSearch }) => {
    return (
        <>
            <Search buttonLabel="Busca tu pokemon" onSearch={onSearch} />
            <ul>
                {
                pokemonsList.map((pokemon, index) => 
                    <PokemonItem pokemon={pokemon} index={index} key={index} />
                    )
                }
            </ul>
        </>
    );
}

export default PokemonSearch; 