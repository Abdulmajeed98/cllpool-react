
import { useState } from 'react'
import Logo from '../../assets/nav-logo.svg'
import NavLink from './NavLink'
import DropDown from './../dropDown/DropDown';

const languages = [
    { id: 1, lang: 'English', abbr: 'en' },
    { id: 2, lang: 'Turkish', abbr: 'tr' },
    { id: 3, lang: 'Arabic', abbr: 'ar' },
    { id: 4, lang: 'Kurdish', abbr: 'kr' },
]

const navbarHeight = 136;

const Navbar = () => {
    const [navBackground, setNavBackground] = useState(false)
    const changeNavbarBackground = () => {
        window.scrollY >= navbarHeight ? setNavBackground(true) : setNavBackground(false);
    }
    window.addEventListener('scroll', changeNavbarBackground)

    return (
        <nav className={`fixed top-0 left-0 w-full flex items-center justify-between ${!navBackground && 'bg-transparent'} ${navBackground && 'bg-slate-700'} px-sides py-8 z-max transition-all duration-500`}>
            <a href='#' className='w-44 h-26'>
                <img src={Logo} alt="CLLPOOL Logo" className='w-full h-full' />
            </a>
            <div className='flex items-center gap-x-12 px-2 py-4'>
                <NavLink destination={'#'} content={'home'} />
                <NavLink destination={'#'} content={'about'} />
                <NavLink destination={'#'} content={'projects'} />
                <NavLink destination={'#'} content={'our client'} />
                <NavLink destination={'#'} content={'contact us'} />
            </div>

            <DropDown navBgChange={navBackground} />
        </nav >
    )
}

export default Navbar
