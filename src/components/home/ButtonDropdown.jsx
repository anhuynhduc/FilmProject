import React, {useEffect, useRef, useState} from 'react';


const ButtonDropdown = ({ data, imageButtons}) => {
    const [selectedMenu, setSelectedMenu] = useState(imageButtons.default);
    const [isActive, setIsActive] = useState(false)
    const menuRef = useRef()

    const selectMenu= (mood) => {
        setSelectedMenu(mood);
        setIsActive(false)
    };

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)){
                setIsActive(false)
            }
        }
        document.addEventListener("mousedown", handler);
    })

    return (
        <div ref={menuRef} className={`select-menu select-menu__mood`}>
            <div
                className="select-btn select-btn__mood bg-mid-gray md:rounded-lg xl:rounded-lg border-[1px] border-[#73707D]
                 xl:h-12 xl:w-52 md:w-36 sm:w-18 text-gray-400 outline-none cursor-pointer flex justify-center
                 items-center gap-4 md:h-12 sm:h-6 sm:rounded-[3px] sm:px-1"
                onClick={() => setIsActive(!isActive)}
            >
                <span className="sBtn-text sBtn-text__mood flex justify-center items-center xl:gap-2 md:gap-2 sm:gap-1">
                    <img src={imageButtons.leftImg} alt="" className="btn-img__before xl:h-8 md:h-4 sm:h-3" />
                    <p className="text-gray-400 xl:text-base md:text-[11px] sm:text-[7px]"> {selectedMenu} </p>
                    <img src={imageButtons.rightImg} alt="" className="btn-img__after xl:h-2 md:h-[6px] sm:h-[4px]" />
                </span>
            </div>

            <ul className={`options options__mood absolute xl:w-56 md:w-36 overflow-y-auto z-10 md:max-h-44
            xl:max-h-72 px-4 mt-2 rounded-lg bg-[#454A61] animate-fadeInDown ${isActive ? 'block' : 'hidden'}`}>
                {data.map((menu, index) => (
                    <li
                        key={index}
                        className="option option__mood flex xl:h-14 md:h-10 sm:h-6 cursor-pointer xl:px-4 md:px-1
                        rounded-lg items-center bg-[#454A61] justify-left"
                        onClick={() => selectMenu(menu)}
                    >
                        <span className="option-text option-text__mood text-gray-400 xl:text-lg md:text-[13px] sm:text-[10px]">
                            {menu}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ButtonDropdown;
