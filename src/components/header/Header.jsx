import VideoHeader from '../../assets/video/header-video.mp4'
const Header = () => {
    return (
        <header className="realtive bg-black bg-opacity-50 w-screen h-screen">
            <video src={VideoHeader} autoPlay muted loop className='absolute object-fill h-full w-full -z-10'></video>
        </header>
    )
}

export default Header
