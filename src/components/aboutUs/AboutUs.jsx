import ServiceCard from "./ServiceCard";
import { Jacuzzi, SwimmingPool, Sauna, TurkishBath, ShowPool, Designing } from "../../assets/icons";
import data from "../../data.json";
import SectionTitle from "../global/SectionTitle";

const icons = [
    {
        id: 1,
        name: "swimming pool",
        icon: <SwimmingPool className="h-full w-full fill-white" />,
    },
    {
        id: 2,
        name: "jacuzzi",
        icon: <Jacuzzi className="h-full w-full fill-white" />,
    },
    {
        id: 3,
        name: "show pool",
        icon: <ShowPool className="h-full w-full fill-white" />,
    },
    {
        id: 4,
        name: "sauna",
        icon: <Sauna className="h-full w-full fill-white" />,
    },
    {
        id: 5,
        name: "designing",
        icon: <Designing className="h-full w-full fill-white" />,
    },
    {
        id: 6,
        name: "turkish bath",
        icon: <TurkishBath className="h-full w-full fill-white" />,
    },
];

const AboutUs = () => {
    return (
        <section
            className="flex scroll-mt-nav-offset flex-col items-center gap-8 px-sides py-8"
            id="about">
            <SectionTitle title={"Who are we ?"} />
            <p className="w-2/3 text-center text-xl">
                Lorem ipsum dolor sit amet, cossectetur adipisicing elit. Porro reiciendis nostrum
                non illo iste rerum ad eos officia dolor et voluptas magnam impedit suscipit quis
                soluta optio veniam ut sapiente ducimus inventore itaque eveniet magni, enim harum.
                Iure perspiciatis, possimus quia suscipit autem hic atque, fugiat quam quos maiores
                eligendi.
            </p>
            <SectionTitle title={"Services"} />
            <div className="grid w-full grid-cols-1 justify-items-center gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                {data.ServiceCards.map((element) => (
                    <ServiceCard
                        key={element.cardId}
                        title={element.cardTitle}
                        description={element.cardDescription}
                        icon={icons.find((icon) => icon.name === element.cardTitle).icon}
                    />
                ))}
            </div>
        </section>
    );
};

export default AboutUs;
