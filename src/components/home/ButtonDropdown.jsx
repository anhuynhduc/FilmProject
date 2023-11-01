import React, { useState } from 'react';


const ButtonDropdown = ({ data, imageButtons, isActive, toggleDropdown }) => {
    const [selectedMood, setSelectedMood] = useState(imageButtons.default);
    const toggleMenu = () => {
        toggleDropdown();
    };

    const selectMenu= (mood) => {
        setSelectedMood(mood);
    };

    return (
        <div className={`select-menu select-menu__mood ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
            <div
                className="select-btn select-btn__mood bg-mid-gray rounded-lg border-[1px] border-[#73707D]
                 h-12 w-52 text-gray-400 outline-none cursor-pointer flex justify-center
                 items-center gap-4"
                onClick={toggleMenu}
            >
                <span className="sBtn-text sBtn-text__mood flex justify-center items-center gap-2">
                    <img src={imageButtons.leftImg} alt="" className="btn-img__before h-8" />
                    <p className="text-gray-400"> {selectedMood} </p>
                    <img src={imageButtons.rightImg} alt="" className="btn-img__after h-2" />
                </span>
            </div>

            <ul className={`options options__mood absolute w-56 overflow-y-auto z-10
            max-h-72 px-4 mt-2 rounded-lg bg-[#454A61] animate-fadeInDown ${isActive ? 'block' : 'hidden'}`}>
                {data.map((mood, index) => (
                    <li
                        key={index}
                        className="option option__mood flex h-14 cursor-pointer px-4
                        rounded-lg items-center bg-[#454A61] justify-left"
                        onClick={() => selectMenu(mood)}
                    >
                        <span className="option-text option-text__mood text-gray-400 text-lg">
                            {mood}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ButtonDropdown;
