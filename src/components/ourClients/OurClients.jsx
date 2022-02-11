import EmpireLogo from "../../assets/empire-logo.svg";
import SpotifyLogo from "../../assets/spotify-logo.svg";
import ClientBrand from "./ClientBrand";

const clients = [
  {
    id: 1,
    logo: EmpireLogo,
    alt: "logo",
  },
  {
    id: 2,
    logo: SpotifyLogo,
    alt: "logo",
  },
  {
    id: 3,
    logo: EmpireLogo,
    alt: "logo",
  },
  {
    id: 4,
    logo: EmpireLogo,
    alt: "logo",
  },
  {
    id: 5,
    logo: EmpireLogo,
    alt: "logo",
  },
  {
    id: 6,
    logo: EmpireLogo,
    alt: "logo",
  },
];

const OurClients = () => {
  return (
    <section className="bg-slate-700 text-white scroll-mt-nav-offset px-sides py-8" id="clients">
      <h2 className="text-6xl capitalize text-center my-16">Our Clients</h2>
      <div className="grid grid-cols-3 justify-items-center gap-x-4 gap-y-8 my-8">
        {clients.map((client) => (
          <ClientBrand key={client.id} logo={client.logo} alt={client.alt} />
        ))}
      </div>
    </section>
  );
};

export default OurClients;
