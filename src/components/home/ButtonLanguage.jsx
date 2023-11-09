import React, {useEffect, useRef, useState} from "react";
import iconLanguage from '../../assets/images/icons/iconLanguage.svg'
import iconDownRow from '../../assets/images/icons/iconDown-arrow.svg'
function ButtonLanguage({ type, location }) {
    const [isOptionsVisible, setOptionsVisible] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("");

    let menuRef = useRef()

    const languages = ["English", "French", "Chinese", "Vietnamese"];


    const toggleOptions = () => {
        setOptionsVisible(!isOptionsVisible);
    };

    const selectLanguage = (language) => {
        setSelectedLanguage(language);
        setOptionsVisible(false);
    };

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)){
                setOptionsVisible(false)
            }
        }
        document.addEventListener("mousedown", handler);
    })

    return (
        <div ref={menuRef} className={`w-[167px] h-[45px] md:mt-[-18px] md:h-[25px] flex sm:h-[25px]
          ${ type === "above" ? "justify-start" : "justify-end"}`}>
            <div ref={menuRef} className="relative inline-block">
                <div className="border-2 border-gray-800 rounded-[10px] sm:px-[4px] sm:py-[4px]
             md:h-[45px] xl:h-[45px] md:px-[6px] bg-gray-900 text-main-white flex justify-center items-center gap-2
             px-4 cursor-pointer" onClick={toggleOptions}>
                    <img src={iconLanguage} className="h-6 md:h-4 sm:h-[15px]" alt="Language" />
                    <span className="sm:text-[11px] md:text-[12px] xl:text-base " id="selectedLanguage">{selectedLanguage}</span>
                    <img src={iconDownRow} className="h-3" alt="Dropdown" />
                </div>

                <ul className={`absolute overflow-y-auto xl:max-w-[190px] xl:max-h-72  z-10 sm:left-0 md:max-w-[190px] md:max-h-72
             px-4 mt-2 rounded-lg bg-gray-800 shadow-md md:left-[-55px] sm:max-w-[120px]
             transition-opacity duration-350 left-[-100px]
             ${ type === "above" ? "xl:top-[-240px] md:top-[-240px] sm:top-[-175px]": ""}
              ${isOptionsVisible ? "opacity-100" : "opacity-0 hidden"}`}>
                    {languages.map((language, index) => (
                        <li className="flex xl:h-14 md:h-14 sm:h-10 cursor-pointer items-center" key={index} onClick={() => selectLanguage(language)}>
                            <span className="sm:text-[13px] md:text-lg font-poppins text-xl text-gray-400 hover:text-vibrant-pink">{language}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ButtonLanguage;
