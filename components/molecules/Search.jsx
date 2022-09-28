import { useState } from 'react';
import Button from  '../atoms/Button';
import Input from '../atoms/Input';

const Search = ({ buttonLabel, onSearch }) => {
    const [value, setValue] = useState(null);

    const handleClick = () => {
        onSearch(value);
    }

    const onChange = (event) => {
        event.preventDefault();
        setValue(event.target.value);
    };
    return (
        <>         
          <Input placeholder="Pokemon" type="text" onChange={onChange} value={value} />
          <Button label={buttonLabel} onClick={handleClick} />
        </>
      );
}

export default Search;