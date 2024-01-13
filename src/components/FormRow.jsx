function FormRow({ label_name }) {
  return (
    <>
      <label>{label_name}</label>
      <input
        type='text'
        name={label_name}
        id={label_name}
        className='py-1 rounded-md px-2 placeholder:capitalize placeholder:text-zinc-600 focus:outline-none focus:ring-zinc-600 focus:ring-solid focus:ring-4 focus:ring-offset-2	'
        required
        placeholder={label_name}
      />
    </>
  );
}

export default FormRow;
