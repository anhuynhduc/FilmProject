import React from 'react';
import {listLinkFooters, listSocials} from "../constants/index.js";
import appStore from '../assets/images/icons/iconApple.svg'
import googlePlay from '../assets/images/icons/iconGoogleplay.svg'
import iconLogo from '../assets/images/icons/iconLogo.svg'
import ButtonLanguage from "./home/ButtonLanguage.jsx";
import Reveal from "./home/Reveal.jsx";

const Footer = () => {
    return (
        <div className="
        w-[90%] ml-[5%] py-14
        ">
            <div className="flex justify-center items-center gap-6">
                {listSocials.map((social) => (
                        <a key={social.id} href={social.link}>
                            <img
                                className="xl:w-8 md:w-6 sm:w-5"
                                src={social.imgURL}
                                alt={social.link}
                            />
                        </a>
                ))}
            </div>
            <div className="flex justify-center items-center xl:gap-10 md:gap-6 xl:mt-14 md:mt-14 sm:mt-8
            flex-wrap sm:gap-4 ">
                {listLinkFooters.map((list) => (
                        <a key={list.id} href={list.link}>
                        <span className="text-dark-gray xl:text-xl md:text-[14px] sm:text-[12px]">
                            {list.title}
                        </span>
                        </a>
                ))}
            </div>
            <div className="flex justify-center items-center gap-4 xl:mt-14 md:mt-14 sm:mt-8">
                    <a className="flex justify-center items-center bg-[#1C1F29] px-4 py-[11px] rounded-[10px] gap-1"
                       href="/appStore"
                    >
                        <img className="xl:w-10 md:w-8" src={appStore} alt="appstore"/>
                        <div className=" text-left">
                            <p className="text-main-white xl:text-[14px] md:text-[12px] sm:text-[9px]">Upload to</p>
                            <p className="text-main-white xl:text-lg md:text-base sm:text-[13px]">App Store</p>
                        </div>
                    </a>
                    <a className="flex justify-center items-center bg-[#1C1F29] px-4 py-[11px] rounded-[10px] gap-1"
                       href="/GooglePlay"
                    >
                        <img className="xl:w-10 md:w-8" src={googlePlay} alt="appstore"/>
                        <div className=" text-left">
                            <p className="text-main-white xl:text-[14px] md:text-[12px] sm:text-[9px]">Upload to</p>
                            <p className="text-main-white xl:text-lg md:text-base sm:text-[13px]">Google Play</p>
                        </div>
                    </a>
            </div>
            <div className="flex justify-between items-center xl:mt-10 md:mt-14 sm:mt-10">
                    <ButtonLanguage type={'above'}/>
                    <div className="flex gap-3 justify-center">
                        <img src={iconLogo} alt="playOn" className="xl:w-[100px] md:w-[100px] sm:w-[50px]"/>
                        <span className="text-main-white xl:text-lg md:text-lg sm:text-[12px]">Los-Angeles</span>
                    </div>
            </div>
        </div>
    );
};

export default Footer;