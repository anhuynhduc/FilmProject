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
                className="select-btn select-btn__mood bg-mid-gray rounded-lg border-[1px] border-[#73707D]
                 h-12 w-52 text-gray-400 outline-none cursor-pointer flex justify-center
                 items-center gap-4"
                onClick={() => setIsActive(!isActive)}
            >
                <span className="sBtn-text sBtn-text__mood flex justify-center items-center gap-2">
                    <img src={imageButtons.leftImg} alt="" className="btn-img__before h-8" />
                    <p className="text-gray-400"> {selectedMenu} </p>
                    <img src={imageButtons.rightImg} alt="" className="btn-img__after h-2" />
                </span>
            </div>

            <ul className={`options options__mood absolute w-56 overflow-y-auto z-10
            max-h-72 px-4 mt-2 rounded-lg bg-[#454A61] animate-fadeInDown ${isActive ? 'block' : 'hidden'}`}>
                {data.map((menu, index) => (
                    <li
                        key={index}
                        className="option option__mood flex h-14 cursor-pointer px-4
                        rounded-lg items-center bg-[#454A61] justify-left"
                        onClick={() => selectMenu(menu)}
                    >
                        <span className="option-text option-text__mood text-gray-400 text-lg">
                            {menu}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ButtonDropdown;
