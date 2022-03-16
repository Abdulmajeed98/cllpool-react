const FormInput = ({ id, title, placeholder, type }) => {
  return (
    <div className={`flex flex-1 flex-col flex-wrap items-start`}>
      <label htmlFor={id} className="w-full font-bold capitalize">
        {title}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md border border-slate-700 py-4 px-2 focus:outline-2 focus:outline-sky-500"
      />
    </div>
  );
};

export default FormInput;
