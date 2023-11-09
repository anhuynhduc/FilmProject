import React from 'react';
import {actors, listBannerCategory, listImgSearchCategory} from "../../constants/index.js";
import iconLeftArrow from '../../assets/images/icons/iconLeft-arrow.svg'

const SearchCategory = () => {
    return (
        <div className="w-[85%] ml-[7.5%] xl:mt-[40px] md:mt-[25px] sm:mt-[15px] flex gap-[80px] justify-center items-center md:gap-[40px]">
            <div>
                <h4 className="xl:text-[20px] md:text-[20px] sm:text-[15px] text-main-white font-poppins">Often searched</h4>
                <ul className="mt-3 flex justify-left items-center xl:gap-10 md:gap-[20px] sm:gap-[3px]">
                    {listImgSearchCategory.map((item) => (
                        <li key={item.id}>
                            <a href={item.id}>
                                <img
                                    alt="banner-search"
                                    src={item.imgURL}
                                    className="xl:w-[75px] md:w-[75px] sm:w-[30px]"
                                />
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="xl:mt-[30px] md:mt-[30px] sm:mt-[10px] flex items-end">
                        <div>
                            <h4 className="l:text-[20px] md:text-[20px] sm:text-[15px]  text-main-white">Actors</h4>
                            <div className="grid grid-cols-3 xl:gap-4 md:gap-4 sm:gap-1 xl:w-[350px] md:w-[350px] sm:w-[220px]">
                                {actors.map((item) => (
                                    <div className="flex justify-left items-center xl:gap-3 xl:mt-[15px] cursor-pointer
                                    md:gap-3 sm:gap-1 md:mt-[15px] sm:mt-[5px]" key={item.id}>
                                        <span className="text-[#C0C0C0] xl:text-[12px] md:text-[11px] sm:text-[8px]">{item.name}</span>
                                        <img className="w-[12px]" src={iconLeftArrow} alt="leftRow"/>
                                    </div>
                                ))}
                            </div>
                        </div>
                </div>
            </div>
            <div className="flex xl:mt-[-60px] gap-1 shadow-[#534953] md:mt-[-120px] sm:mt-[-43px] sm:ml-[-130px] xl:ml-0 md:ml-0">
                    {listBannerCategory.map((item) =>(
                        <img
                            src={item.imgURL}
                            alt={item.id}
                            className="xl:w-[150px] md:w-[80px] sm:w-[50px]"
                        />
                    ))}
            </div>
        </div>
    );
};

export default SearchCategory;