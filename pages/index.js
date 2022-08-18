import { useState } from 'react';
import Button from '../components/atoms/Button';
import PokemonSearch from '../components/organisms/PokemonSearch';

export default function Home() {
  const basePokemons = [
    'pikachu', 'charmander', 
    'bulbazor', 'vaporeon',
  ];
  const [myPokemons, setMyPokemons] = useState([]);

  const pokemonLi = basePokemons.map((pokemon) =>
  // eslint-disable-next-line react/jsx-key
  <li>{pokemon}</li>
); 

  const handleSearch = (searchWord) => {
    const filter = (pokemon) => pokemon === searchWord;
    const selectedPokemons = basePokemons.filter(filter);
    setMyPokemons(selectedPokemons);
  };

  return (
    <>
    <PokemonSearch pokemonsList={myPokemons} onSearch={handleSearch} />
    <ul>{pokemonLi}</ul>
    </>
  );
}
