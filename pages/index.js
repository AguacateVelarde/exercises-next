import { useContext, useEffect, useState, useId } from 'react';
import PokemonSearch from '../components/organisms/PokemonSearch';
import { pokemonService } from '../services';
import { SearchWordContext } from '../contexts/search-word';
import PokemonItem from '../components/organisms/PokemonItem';

export default function Home() {
  const basePokemons = [
    'pikachu', 'charmander',
    'bulbazor', 'vaporeon',
  ];
  const [myPokemons, setMyPokemons] = useState([]);
  const [searchWordLocal, setSerchWordLocal] = useState(null);

  const { state: { searchWord, pokemonFavorites }} = useContext(SearchWordContext)

  const handleSearch = (searchWordResponse) => {
    const filter = (pokemon) => pokemon === searchWordResponse;
    const selectedPokemons = basePokemons.filter(filter);
    setMyPokemons(selectedPokemons);
  };

  useEffect(() => {
    setSerchWordLocal(searchWord);
    console.log({ pokemonFavorites })
    //pokemonService.getPokemonById(1).then(console.log)
  }, [searchWord, pokemonFavorites]);

  return (
    <>
      <PokemonSearch pokemonsList={myPokemons} onSearch={handleSearch} />
      <p> Tú busqueda es: {searchWordLocal} </p>

      <ul>
        {
          pokemonFavorites.map((pokemon, index) => {          
            return <PokemonItem key={`pokemon-item-${index}`} pokemon={pokemon} />
          })
        }
      </ul>
    </>
  );
}
