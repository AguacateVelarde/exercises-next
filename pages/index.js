import { useEffect, useState } from 'react';
import PokemonSearch from '../components/organisms/PokemonSearch';
import { pokemonService } from '../services';

export default function Home() {
  const basePokemons = [
    'pikachu', 'charmander', 
    'bulbazor', 'vaporeon',
  ];
  const [myPokemons, setMyPokemons] = useState([]);

  const handleSearch = (searchWord) => {
    const filter = (pokemon) => pokemon === searchWord;
    const selectedPokemons = basePokemons.filter(filter);
    setMyPokemons(selectedPokemons);
  };

  useEffect(() => {
    pokemonService.getPokemonById(1).then(console.log)
  }, []);

  return (
    <PokemonSearch pokemonsList={myPokemons} onSearch={handleSearch} />
  );
}
