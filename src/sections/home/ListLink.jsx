import React from 'react';
import {listLinks} from "../../constants/index.js";
import Reveal from "../../components/home/Reveal.jsx";

const ListLink = () => {
    return (
        <div className="flex justify-center items-center gap-10 list-none">
            {listLinks.map((list) => (
                    <li key={list.id}>
                        <a
                            className="flex justify-center items-center gap-2"
                            href={list.links}
                        >
                            <img className="h-[30px]" src={list.imgURL} alt={list.title}/>
                            <span className="text-base text-main-white hover:text-vibrant-pink">{list.title}</span>
                        </a>
                    </li>
            ))}
        </div>
    );
};

export default ListLink;