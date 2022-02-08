import ServiceCard from './ServiceCard';
import { Jacuzzi, SwimmingPool, Sauna, TurkishBath, ShowPool, Designing } from '../../assets/icons'
import data from '../../data.json'

const icons = [
    {
        id: 1,
        name: 'swimming pool',
        icon: <SwimmingPool className='h-full w-full fill-white' />
    },
    {
        id: 2,
        name: 'jacuzzi',
        icon: <Jacuzzi className='h-full w-full fill-white' />
    },
    {
        id: 3,
        name: 'show pool',
        icon: <ShowPool className='h-full w-full fill-white' />
    },
    {
        id: 4,
        name: 'sauna',
        icon: <Sauna className='h-full w-full fill-white' />
    },
    {
        id: 5,
        name: 'designing',
        icon: <Designing className='h-full w-full fill-white' />
    },
    {
        id: 6,
        name: 'turkish bath',
        icon: <TurkishBath className='h-full w-full fill-white' />
    },
]

const AboutUs = () => {
    return (
        <section className="px-sides flex flex-col items-center py-8 gap-8 scroll-mt-nav-offset" id="about">
            <h2 className="text-6xl py-4">Who we are?</h2>
            <p className="w-2/3 text-xl text-center">Lorem ipsum dolor sit amet, cossectetur adipisicing elit. Porro reiciendis nostrum non illo iste rerum ad eos officia dolor et voluptas magnam impedit suscipit quis soluta optio veniam ut sapiente ducimus inventore itaque eveniet magni, enim harum. Iure perspiciatis, possimus quia suscipit autem hic atque, fugiat quam quos maiores eligendi.</p>
            <div className='w-full grid grid-cols-3 justify-items-center gap-y-8'>
                {data.ServiceCards.map((element) => (<ServiceCard key={element.cardId} title={element.cardTitle} description={element.cardDescription} icon={icons.find((icon) => icon.name === element.cardTitle).icon} />))}
            </div>
        </section>
    )
}

export default AboutUs
