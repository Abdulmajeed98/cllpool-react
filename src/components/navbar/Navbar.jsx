import { Listbox } from '@headlessui/react'
import { useState } from 'react'
import Logo from '../../assets/nav-logo.svg'
import NavLink from './NavLink'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'
const languages = [
    { id: 1, lang: 'English', abbr: 'en' },
    { id: 2, lang: 'Turkish', abbr: 'tr' },
    { id: 3, lang: 'Arabic', abbr: 'ar' },
    { id: 4, lang: 'Kurdish', abbr: 'kr' },
]

const Navbar = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
    return (
        <nav className="fixed top-0 left-0 w-full flex items-center justify-between bg-slate-800 px-sides py-8 z-auto">
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

            <Listbox value={selectedLanguage} onChange={(event) => {
                setSelectedLanguage(languages.find(item => item.abbr === event))
            }} as='div' className='flex flex-col justify-between items-stretch gap-4 border-2 border-white p-4'>
                {({ open }) => (
                    <>
                        <Listbox.Button className='flex justify-between items-center gap-2 text-white'><span>{selectedLanguage.lang}</span>
                            {!open && (<span><MdOutlineKeyboardArrowDown /></span>)}
                            {open && (<span><MdOutlineKeyboardArrowUp /></span>)}</Listbox.Button>
                        {open && (
                            <Listbox.Options static className='relative text-left'>
                                {languages.map((item => (
                                    <Listbox.Option key={item.id} value={item.abbr} className='text-white px-1 border-b'>{item.lang}</Listbox.Option>
                                )))}
                            </Listbox.Options>
                        )}
                    </>
                )}
            </Listbox>
        </nav >
    )
}

export default Navbar
