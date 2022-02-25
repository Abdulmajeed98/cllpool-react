import EmpireLogo from "../../assets/empire-logo.svg";
import SpotifyLogo from "../../assets/spotify-logo.svg";
import SectionTitle from "../global/SectionTitle";
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
    <section
      className="scroll-mt-nav-offset bg-slate-700 px-sides py-8 text-white"
      id="clients"
    >
      <SectionTitle title={"our clients"} />
      <div className="my-8 grid grid-cols-3 justify-items-center gap-x-4 gap-y-8">
        {clients.map((client) => (
          <ClientBrand key={client.id} logo={client.logo} alt={client.alt} />
        ))}
      </div>
    </section>
  );
};

export default OurClients;
