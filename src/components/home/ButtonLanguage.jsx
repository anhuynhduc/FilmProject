import React, { useState } from "react";
import iconLanguage from '../../assets/images/icons/iconLanguage.svg'
import iconDownRow from '../../assets/images/icons/iconDown-arrow.svg'
function ButtonLanguage({ type, location }) {
    const [isOptionsVisible, setOptionsVisible] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("");

    const languages = ["English", "French", "Chinese", "Vietnamese"];

    const toggleOptions = () => {
        setOptionsVisible(!isOptionsVisible);
    };

    const selectLanguage = (language) => {
        setSelectedLanguage(language);
        setOptionsVisible(false);
    };

    return (
        <div className={`w-[167px] h-[45px] flex ${ location ? "justify-start" : "justify-end"}`}>
            <div className="relative inline-block">
                <div className="border-2 border-gray-800 rounded-[10px]
            h-[45px] bg-gray-900 text-main-white flex justify-center items-center gap-2
             px-4 cursor-pointer" onClick={toggleOptions}>
                    <img src={iconLanguage} className="h-6" alt="Language" />
                    <span className="text-base" id="selectedLanguage">{selectedLanguage}</span>
                    <img src={iconDownRow} className="h-3" alt="Dropdown" />
                </div>

                <ul className={`absolute w-[190px] overflow-y-auto max-h-72  z-10
             px-4 mt-2 rounded-lg bg-gray-800 shadow-md 
             transition-opacity duration-350 
             ${ type === "above" ? "top-[-240px]": ""}
              ${isOptionsVisible ? "opacity-100" : "opacity-0 hidden"}`}>
                    {languages.map((language, index) => (
                        <li className="flex h-14 cursor-pointer items-center" key={index} onClick={() => selectLanguage(language)}>
                            <span className="font-poppins text-xl text-gray-400 hover:text-vibrant-pink">{language}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ButtonLanguage;
