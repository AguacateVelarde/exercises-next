const Input = ({ type, value, onChange, placeholder }) => (
    <>
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} className="input"/>
    </>
);

export default Input;