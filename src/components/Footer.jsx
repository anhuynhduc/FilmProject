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
                                className="w-8"
                                src={social.imgURL}
                                alt={social.link}
                            />
                        </a>
                ))}
            </div>
            <div className="flex justify-center items-center gap-10 mt-14">
                {listLinkFooters.map((list) => (
                        <a key={list.id} href={list.link}>
                        <span className="text-dark-gray text-xl">
                            {list.title}
                        </span>
                        </a>
                ))}
            </div>
            <div className="flex justify-center items-center gap-4 mt-14">
                    <a className="flex justify-center items-center bg-[#1C1F29] pl-1 pr-4 rounded-[10px]"
                       href="/appStore"
                    >
                        <img className="w-16" src={appStore} alt="appstore"/>
                        <div className=" text-left">
                            <p className="text-main-white text-[14px]">Upload to</p>
                            <p className="text-main-white text-lg">App Store</p>
                        </div>
                    </a>
                    <a className="flex justify-center items-center bg-[#1C1F29] px-4 py-[11px] rounded-[10px] gap-1"
                       href="/appStore"
                    >
                        <img className="w-10" src={googlePlay} alt="appstore"/>
                        <div className=" text-left">
                            <p className="text-main-white text-[14px]">Upload to</p>
                            <p className="text-main-white text-lg">Google Play</p>
                        </div>
                    </a>
            </div>
            <div className="flex justify-between items-center mt-10">
                    <ButtonLanguage type={'above'}/>
                    <div className="flex gap-3 justify-center">
                        <img src={iconLogo} alt="playOn"/>
                        <span className="text-main-white text-lg">Los-Angeles</span>
                    </div>
            </div>
        </div>
    );
};

export default Footer;