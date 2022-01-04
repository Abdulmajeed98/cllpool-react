import VideoHeader from '../../assets/video/header-video.mp4'
import downArrow from '../../assets/icons/down-arrow.png'


const Header = () => {
    return (
        <header className="relative bg-black bg-opacity-60 w-screen h-screen flex flex-col justify-between items-center">
            <video src={VideoHeader} autoPlay muted loop className='absolute object-fill w-full h-full -z-10'></video>

            <div className='flex flex-col flex-4 justify-center items-center gap-4 pt-8 w-full text-white'>
                <h1 className='text-center text-7xl'>
                    Swim better with us,<br />
                    Get better with us
                </h1>
                <h3 className='text-center text-lg'>
                    CLLPOOL: Pool, Sauna, Turkish Bath, Jacuzzi, Construction and Industry LTD.
                </h3>
                <button className='border-2 border-white px-8 py-4 mt-8 text-lg uppercase  hover:bg-green-400 hover:border-green-500 rounded-3xl hover:rounded-lg transition-all duration-500'>Contact Us</button>
            </div>

            <button className='w-14 h-14 mb-8 animate-bounce'>
                <img src={downArrow} alt="arrow down icon" className='w-full h-full' />
            </button>
        </header>
    )
}

export default Header
