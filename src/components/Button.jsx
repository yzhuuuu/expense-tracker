function Button({ children, onClick }) {
  const base =
    'border-solid border-2 border-gray-100 px-2 py-1 my-4 text-xl rounded-lg';
  return (
    <button className={`${base}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
