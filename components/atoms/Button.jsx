
const Button = ({ label, onClick }) => (
    <>
        <button name="button" onClick={onClick} className="btn">{label}</button>
    </>
);

export default Button;
