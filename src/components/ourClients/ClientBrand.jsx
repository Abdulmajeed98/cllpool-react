import PropTypes from "prop-types";

const ClientBrand = ({ logo, alt }) => {
  return (
    <div className="group h-36 w-72">
      <img width={100} height={100} src={logo} alt={alt} className="h-full w-full object-fill group-hover:animate-pulse" />
    </div>
  );
};

ClientBrand.propTypes = {
  logo: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ClientBrand;
