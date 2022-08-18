import Search from '../molecules/Search';

const PokemonSearch = ({ pokemonsList, onSearch }) => {
    return (
        <>
            <Search buttonLabel="Busca tu pokemon" onSearch={onSearch} />
            <ul>
                {pokemonsList.map((pokemon, index) =>  
                    <li key={`my-pokemon-${index}`}>{pokemon}</li>)
                }
            </ul>
        </>
    );
}

export default PokemonSearch; 