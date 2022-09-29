import { useRouter } from "next/router";

import Button from '../atoms/Button';

const PokemonItem = ({ pokemon }) => {
    const router = useRouter();
    const handlerOnClick = () => router.push(`/pokemons/${pokemon}`);
    return (<>
        <li>
            {pokemon}
            <Button onClick={handlerOnClick} label="Ir a más detalle" />
        </li>
    </>);
}

export default PokemonItem;