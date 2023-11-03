import React, {useState} from 'react';
import headerLogo from '../assets/images/icons/iconLogo.svg'
import iconSearch from '../assets/images/icons/iconSearch.svg'
import iconClosed from '../assets/images/icons/iconClose.svg'
import {navLinks} from "../constants/index.js";
import SearchCategory from "./home/SearchCategory.jsx";
import ButtonLanguage from "./home/ButtonLanguage.jsx";
import ButtonNotification from "./home/ButtonNotification.jsx";
import ButtonProfile from "./home/ButtonProfile.jsx";
const Nav = () => {
    const [openSearch, setOpenSearch] = useState(false)
    const [showNavLink, setShowNavLink] = useState(true)

    const handleShowSearch = (e) =>
    {
        setOpenSearch(true)
        setShowNavLink(false)
    }

    const handleCloseSearch = (e) =>
    {
        setOpenSearch(false)
        setShowNavLink(true)
    }


    return (
        <nav className="w-[96%] m-[2%]">
            <header className="w-full flex justify-center items-center">
                {/*logo header*/}
                <div className="">
                    <a href="/">
                        <img
                            src={headerLogo}
                            alt="Logo"
                            width={130}
                            height={29}
                        />
                    </a>
                </div>
                {/*navlinks*/}
                {showNavLink && <ul className="flex justify-between items-center gap-[40px] ml-[40px]
                ">
                    {navLinks.map((nav, index) => (
                        <li key={index}>
                            <a
                                href={nav.href}
                                className="text-base text-main-white hover:text-vibrant-pink font-poppins"
                            >
                                {nav.label}
                            </a>
                        </li>
                    ))}
                </ul>}

                {/*header action*/}
                <div className={`${showNavLink ? "ml-[450px]" : "ml-[40px]"}`}>
                    <ButtonLanguage type={'below'} location={openSearch}/>
                </div>

                {/*action search*/}
                <div className={`w-auto flex gap-[10px] ${openSearch === true ? "pl-[40px]": "pl-[20px]" }`}>
                    <button onClick={handleShowSearch}>
                        <img
                            className="w-[25px]"
                            src={iconSearch}
                            alt="search"/>
                    </button>
                    {openSearch && <div className="flex gap-[15px]">
                        <input
                            className="p-[5px] outline-none w-[650px] text-main-white bg-[#020510]
                            placeholder:text-dark-gray placeholder:text-xs"
                            placeholder="Movie/series name or actor/director name"/>
                        <button onClick={handleCloseSearch}>
                            <img
                                className="w-[25px]"
                                src={iconClosed}
                                alt="closed"/>
                        </button>
                        <div className="h-[25px] w-[1px] bg-main-white mt-[8px]"></div>
                    </div>
                    }
                </div>

                {/*action profile*/}
                <div className="flex justify-center items-center gap-[15px] pl-[20px]">
                    <button className="h-auto w-auto bg-vibrant-pink
                        py-[5px] px-[10px] text-main-white rounded-[5px]
                        hover:bg-pink-600
                    ">
                        Buy for 50$
                    </button>
                    <ButtonNotification/>
                    <ButtonProfile/>
                </div>
            </header>
            {openSearch && <SearchCategory/>}
        </nav>
    );
};

export default Nav;