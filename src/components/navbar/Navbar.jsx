
import { useState } from 'react'
import Logo from '../../assets/nav-logo.svg'
import NavLink from './NavLink'
import DropDown from './../dropDown/DropDown';


const navbarHeight = 136;

const Navbar = () => {
    const [navBackground, setNavBackground] = useState(false)
    const changeNavbarBackground = () => {
        window.scrollY >= navbarHeight ? setNavBackground(true) : setNavBackground(false);
    }
    window.addEventListener('scroll', changeNavbarBackground)

    return (
        <nav className={`fixed top-0 left-0 w-full flex items-center justify-between ${!navBackground && 'bg-transparent'} ${navBackground && 'bg-slate-700'} px-sides py-8 z-max transition-all duration-500`}>
            <a href='#home' className='w-44 h-26'>
                <img src={Logo} alt="CLLPOOL Logo" className='w-full h-full' />
            </a>
            <div className='flex items-center gap-x-12 px-2 py-4'>
                <NavLink destination={'home'} content={'home'} />
                <NavLink destination={'about'} content={'about'} />
                <NavLink destination={'projects'} content={'projects'} />
                <NavLink destination={'clients'} content={'our client'} />
                <NavLink destination={'contact-us'} content={'contact us'} />
            </div>

            <DropDown navBgChange={navBackground} />
        </nav >
    )
}

export default Navbar
