import React from 'react';
import {listLinks} from "../../constants/index.js";
import Reveal from "../../components/home/Reveal.jsx";

const ListLink = () => {
    return (
        <div className="flex justify-center items-center sm:mt-[-30px] xl:mt-0  md:mt-0">
            <div className="flex xl:justify-center items-center xl:gap-10 md:gap-10 sm:gap-6 list-none overflow-scroll sm:w-[95%]
            md:w-[90%] xl:w-[100%] md:justify-start">
                {listLinks.map((list) => (
                        <li key={list.id} className="xl:ml-0 md:ml-[10px]">
                            <a
                                className="flex justify-center items-center xl:gap-2 md:gap-2 sm:gap-1"
                                href={list.links}
                            >
                                <img className="xl:h-[30px] md:h-[15px] sm:h-[10px] sm:ml-[5px]" src={list.imgURL} alt={list.title}/>
                                <span className="sm:text-[9px] xl:text-base md:text-[13px] text-main-white hover:text-vibrant-pink">{list.title}</span>
                            </a>
                        </li>
                ))}
            </div>
        </div>
    );
};

export default ListLink;