import pokemonServiceFactory from './pokemon';
import axios from 'axios';

const client = axios.create({ baseURL: 'https://pokeapi.co/api/v2/' });

export const pokemonService = pokemonServiceFactory(client)