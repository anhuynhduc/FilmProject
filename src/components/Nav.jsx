import React, {useState} from 'react';
import headerLogo from '../assets/images/icons/iconLogo.svg'
import iconSearch from '../assets/images/icons/iconSearch.svg'
import iconClosed from '../assets/images/icons/iconClose.svg'
import {navLinks} from "../constants/index.js";
import SearchCategory from "./home/SearchCategory.jsx";
import ButtonLanguage from "./home/ButtonLanguage.jsx";
import ButtonNotification from "./home/ButtonNotification.jsx";
import ButtonProfile from "./home/ButtonProfile.jsx";
import Reveal from "./home/Reveal.jsx";
import SliderSearch from "../sections/home/SliderSearch.jsx";
import {iconList} from "../assets/images/icons/index.js";
import Sidebar from "./home/sidebar/Sidebar.jsx";
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
                            className="xl:w-[180px] xl:h-[40px] md:w-[130px] md:h-[30px] sm:w-[70px]"
                        />
                    </a>
                    <div className={` absolute 2xl:hidden xl:hidden md:hidden sm:ml-[80px] sm:mt-[-25px]
                    ${showNavLink ? "sm:block": "sm:hidden" }`}>
                        <ButtonLanguage type={'below'} location={openSearch}/>
                    </div>
                </div>
                {/*navlinks*/}
                {showNavLink && <ul className="flex justify-between items-center gap-[40px] ml-[40px] md:gap-[20px]
                sm:hidden xl:flex md:flex md:ml-[20px]">
                    {navLinks.map((nav, index) => (
                        <li key={index}>
                            <a
                                href={nav.href}
                                className="xl:text-base text-main-white hover:text-vibrant-pink font-poppins md:text-[14px]"
                            >
                                {nav.label}
                            </a>
                        </li>
                    ))}
                </ul>}

                {/*header action*/}
                <div className={`${showNavLink ? "2xl:ml-[650px] xl:ml-[300px]" : "lg:ml-[40px]"} sm:hidden xl:block md:block
                `}>
                    <ButtonLanguage type={'below'} location={openSearch}/>
                </div>

                {/*action search*/}
                <div className={`w-auto flex gap-[10px] md:gap-0 ${openSearch === true ? "md:pl-0 xl:pl-[40px]": "xl:pl-[20px]" }
                xl:m-0 md:m-0  `}>
                    <button onClick={handleShowSearch} className={`px-[5px] xl:ml-0 md:ml-0
                    ${showNavLink ? "sm:ml-[170px]": "sm:ml-0" }`}>
                        <img
                            className={`xl:w-[25px] md:w-[20px] ml-[10px] sm:w-[15px] xl:mt-0 md:mt-0
                            ${showNavLink ? "sm:mt-[-2px]": "sm:mt-0" }`}
                            src={iconSearch}
                            alt="search"/>
                    </button>
                    {openSearch && <div className="flex gap-[15px]">
                        <input
                            className="p-[5px] outline-none xl:w-[650px] text-main-white bg-[#020510] md:w-[150px]
                            sm:w-[100px] placeholder:text-dark-gray xl:placeholder:text-xs md:placeholder:text-xs
                            sm:placeholder:text-[9px] xl:text-base md:text-base sm:text-[9px]"
                            placeholder="Movie/series name or actor/director name"/>
                        <button onClick={handleCloseSearch}>
                            <img
                                className="w-[25px] md:w-[20px] sm:w-[15px] sm:mt-[0px]"
                                src={iconClosed}
                                alt="closed"/>
                        </button>
                        <div className="xl:h-[25px] md:h-[25px] sm:h-[15px] w-[1px] bg-main-white xl:mt-[8px]
                        md:mt-[8px] sm:mt-[4px]"></div>
                    </div>
                    }
                </div>

                {/*action profile*/}
                <div className={`relative flex xl:justify-center items-center xl:gap-[15px] xl:pl-[20px] md:pl-[10px] sm:gap-[5px]
                md:gap-[15px] md:justify-center xl:mt-0 md:mt-0 ${showNavLink ? "sm:mt-[-spx]": "sm:mt-0" }`}>
                    <button className="xl:h-auto xl:w-auto bg-vibrant-pink md:text-[11px] sm:text-[7px] sm:px-[5px] sm:py-[3px]
                        py-[5px] px-[10px] text-main-white xl:rounded-[5px] md:rounded-[5px] sm:rounded-[3px] xl:m-0 md:m-0
                        xl:ml-0 md:ml-0 sm:ml-2 hover:bg-pink-600
                    ">
                        Buy for 50$
                    </button>
                    <ButtonNotification/>
                    <ButtonProfile/>
                    <div className="2xl:hidden xl:hidden md:hidden sm:block">
                        {showNavLink && <Sidebar/>}
                    </div>
                    {/*<button className={`bg-vibrant-pink py-[2px] px-[2px] text-main-white rounded-[2px]*/}
                    {/*    hover:bg-pink-600 absolute left-[60px] top-[30px] xl:hidden md:hidden 2xl:hidden*/}
                    {/*    ${showNavLink ? "sm:block": "sm:hidden" }*/}
                    {/*`}>*/}
                    {/*    <img src={iconList} alt="list" className="w-[17px]"/>*/}
                    {/*</button>*/}
                </div>

            </header>
            { openSearch && <SearchCategory/> }
            { showNavLink && <SliderSearch/> }
        </nav>
    );
};

export default Nav;