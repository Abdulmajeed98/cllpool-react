const FormInput = ({ id, title, placeholder, type }) => {
    return (
        <div className={`flex flex-col flex-wrap items-start flex-1`}>
            <label htmlFor={id} className="capitalize w-full">{title}</label>
            <input id={id} name={id} type={type} placeholder={placeholder} className="border border-slate-700 mt-2 rounded-md w-full py-4 px-2 focus:outline-2 focus:outline-sky-500" />
        </div>
    )
}

export default FormInput
