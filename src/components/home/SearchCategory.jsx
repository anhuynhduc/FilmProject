import React from 'react';
import {actors, listBannerCategory, listImgSearchCategory} from "../../constants/index.js";
import iconLeftArrow from '../../assets/images/icons/iconLeft-arrow.svg'

const SearchCategory = () => {
    return (
        <div className="w-[85%] ml-[7.5%] mt-[40px] flex gap-[80px] justify-center items-center">
            <div>
                <h4 className="text-[20px] text-main-white font-poppins">Often searched</h4>
                <ul className="mt-3 flex justify-left items-center gap-10">
                    {listImgSearchCategory.map((item) => (
                        <li key={item.id}>
                            <a href={item.id}>
                                <img
                                    alt="banner-search"
                                    src={item.imgURL}
                                    className="w-[75px]"
                                />
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="mt-[30px] flex items-end">
                        <div>
                            <h4 className="text-[20px] text-main-white">Actors</h4>
                            <div className="grid grid-cols-3 gap-4 w-[600px]">
                                {actors.map((item) => (
                                    <div className="flex justify-left items-center gap-3 mt-[15px] cursor-pointer" key={item.id}>
                                        <span className="text-[#C0C0C0] text-[14px]">{item.name}</span>
                                        <img className="w-[12px]" src={iconLeftArrow} alt="leftRow"/>
                                    </div>
                                ))}
                            </div>
                        </div>
                </div>
            </div>
            <div className="flex mt-[-35px] gap-1 shadow-[#534953]">
                    {listBannerCategory.map((item) =>(
                        <img
                            src={item.imgURL}
                            alt={item.id}
                            className="w-[150px]"
                        />
                    ))}
            </div>
        </div>
    );
};

export default SearchCategory;