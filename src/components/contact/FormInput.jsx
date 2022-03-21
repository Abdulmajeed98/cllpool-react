import PropTypes from "prop-types";
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

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
export default FormInput;
