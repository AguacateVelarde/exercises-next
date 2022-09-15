import { useContext } from 'react';
import { SearchWordContext } from '../../contexts/search-word';

const Input = ({ type, value, onChange }) => {

    const { dispatch } = useContext(SearchWordContext);

    const handleOnChange = (event) => {
        dispatch({ type: 'update', searchWord: event.target.value })
        onChange(event)
    };

    return (
        <>
            <input type={type} value={value} onChange={handleOnChange} />
        </>
    );
}

export default Input;