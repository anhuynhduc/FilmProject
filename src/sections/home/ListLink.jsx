import React from 'react';
import {listLinks} from "../../constants/index.js";
import Reveal from "../../components/home/Reveal.jsx";

const ListLink = () => {
    return (
        <div className="flex justify-center items-center sm:mt-[-30px] xl:mt-0  md:mt-0">
            <div className="flex xl:justify-center items-center gap-10 list-none overflow-scroll sm:w-[80%]
            md:w-[90%] xl:w-[100%] md:justify-start">
                {listLinks.map((list) => (
                        <li key={list.id} className="xl:ml-0 md:ml-[10px]">
                            <a
                                className="flex justify-center items-center gap-2"
                                href={list.links}
                            >
                                <img className="xl:h-[30px] md:h-[15px] sm:h-[15px] sm:ml-[10px]" src={list.imgURL} alt={list.title}/>
                                <span className="sm:text-[11px] xl:text-base md:text-[13px] text-main-white hover:text-vibrant-pink">{list.title}</span>
                            </a>
                        </li>
                ))}
            </div>
        </div>
    );
};

export default ListLink;