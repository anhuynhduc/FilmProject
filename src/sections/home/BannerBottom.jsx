import React from 'react';
import {bannerFooter1, bannerFooter2, bannerFooter3} from "../../assets/images/banner-footers/index.js";


const BannerBottom = () => {
    return (
        <div className="w-[90%] ml-[5%] xl:mt-[80px] md:mt-[40px] sm:mt-[30px]
        flex justify-center items-center xl:gap-3 md:gap-3 sm:gap-1
       ">
            <img className="w-[33.3%] filter drop-shadow-md" src={bannerFooter1} alt="banner1" />
            <img className="w-[33.3%] filter drop-shadow-md" src={bannerFooter2} alt="banner2" />
            <img className="w-[33.3%] filter drop-shadow-md" src={bannerFooter3} alt="banner3" />
        </div>
    );
};

export default BannerBottom;