import { Listbox, Transition } from '@headlessui/react';
import React, { useState } from 'react';
const languages = [
    { id: 1, lang: 'English', abbr: 'en' },
    { id: 2, lang: 'Turkish', abbr: 'tr' },
    { id: 3, lang: 'Arabic', abbr: 'ar' },
    { id: 4, lang: 'Kurdish', abbr: 'kr' },
]

const DropDown = ({ navBgChange }) => {
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
    return (
        <Listbox value={selectedLanguage} onChange={setSelectedLanguage} as={'div'} className={`relative flex flex-col justify-center text-white border border-white ${navBgChange ? 'bg-slate-700' : 'bg-transparent'}`}>
            <Listbox.Button
                className={'px-8 py-2'}>{selectedLanguage.lang}</Listbox.Button>
            <Transition
                enter="transition-opacity duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                <Listbox.Options className={`absolute top-12 flex flex-col w-full justify-center ${navBgChange ? 'bg-slate-700' : 'bg-transparent'} border border-white`}>
                    {languages.map((language) => (
                        <Listbox.Option
                            className={`cursor-pointer hover:bg-white hover:text-slate-700 transition-all duration-300 px-8 py-2`}
                            key={language.id}
                            value={language}>
                            {language.lang}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Transition>
        </Listbox>
    );
};

export default DropDown;
