import Logo from '../../assets/nav-logo.svg'
import NavLink from './NavLink'

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full flex items-center justify-between bg-slate-800 px-section py-8">
            <div className='w-44 h-26'>
                <img src={Logo} alt="CLLPOOL Logo" className='w-full h-full' />
            </div>
            <div className='flex items-center gap-x-12 px-2 py-4'>
                <NavLink destination={'#'} content={'home'} />
                <NavLink destination={'#'} content={'about'} />
                <NavLink destination={'#'} content={'projects'} />
                <NavLink destination={'#'} content={'our client'} />
                <NavLink destination={'#'} content={'contact us'} />
            </div>
            <select name="languages" id="languages">
                <option value="en">English</option>
                <option value="tr">Turkish</option>
                <option value="ar">Arabic</option>
                <option value="ku">کوردی</option>
            </select>
        </nav>
    )
}

export default Navbar
