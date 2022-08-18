import { useState } from 'react';
import PokemonSearch from '../components/organisms/PokemonSearch';

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

  return (
    <PokemonSearch pokemonsList={myPokemons} onSearch={handleSearch} />
  );
}
