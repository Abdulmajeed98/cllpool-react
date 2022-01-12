const ClientBrand = ({ logo, alt }) => {
    return (
        <div className="group h-36 w-72">
            <img src={logo} alt={alt} className="w-full h-full object-fill group-hover:animate-pulse" />
        </div>
    )
}

export default ClientBrand
