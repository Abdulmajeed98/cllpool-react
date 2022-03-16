import { Listbox, Transition } from "@headlessui/react";
import React, { useState } from "react";
const languages = [
    { id: 1, lang: "English", abbr: "en" },
    { id: 2, lang: "Turkish", abbr: "tr" },
    { id: 3, lang: "Arabic", abbr: "ar" },
    { id: 4, lang: "Kurdish", abbr: "kr" },
];

const DropDown = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
    return (
        <Listbox
            value={selectedLanguage}
            onChange={setSelectedLanguage}
            as={"div"}
            className={`relative flex flex-col justify-center border border-white bg-inherit text-white`}>
            <Listbox.Button className={"bg-inherit px-8 py-2"}>
                {selectedLanguage.lang}
            </Listbox.Button>
            <Transition
                className={"bg-inherit"}
                enter="transition-opacity duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                <Listbox.Options
                    className={`absolute top-12 flex w-full flex-col justify-center border border-white bg-inherit`}>
                    {languages.map((language) => (
                        <Listbox.Option
                            className={`cursor-pointer px-8 py-2 transition-all duration-300 hover:bg-sky-200 hover:text-sky-700`}
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
