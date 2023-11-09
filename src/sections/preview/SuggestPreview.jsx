import React, {useEffect, useRef, useState} from 'react';
import ButtonDropdown from "../../components/home/ButtonDropdown.jsx";
import iconThinking from '../../assets/images/icons/iconThinking.svg'
import iconDown from '../../assets/images/icons/iconDown.svg'
import iconFriend from '../../assets/images/icons/iconFriends.svg'
import {Suggest1, Suggest2, Suggest3, Suggest4} from "../../assets/images/suggests/index.js";

const moodLists = [
    'Mood',
    'Happy',
    'Proud',
    'Worried',
    'Sad',
    'Fearful',
    'Excited',
    'Disappointed'
];

const somebodyLists = [
    'With somebody',
    'Friend',
    'Love',
    'Family',
];
const imageButtonMoods = {
    leftImg: iconThinking,
    rightImg: iconDown,
    default: 'Mood'
}
const imageButtonSomebody = {
    leftImg: iconFriend,
    rightImg: iconDown,
    default: 'With somebody'
}
const SuggestPreview = () => {

    const backgroundStyles1 = {
        backgroundImage: `url(${Suggest1})`,
        backgroundPositionY: '-25px',
        backgroundRepeat: 'no-repeat'
    };
    const backgroundStyles2 = {
        backgroundImage: `url(${Suggest2})`,
        backgroundPositionY: '-50px',
        backgroundRepeat: 'no-repeat'
    };
    const backgroundStyles3 = {
        backgroundImage: `url(${Suggest3})`,
        backgroundRepeat: 'no-repeat'
    };
    const backgroundStyles4 = {
        backgroundImage: `url(${Suggest4})`,
        backgroundRepeat: 'no-repeat'
    };

    return (
        <div className="w-[97%] ml-[1.5%] bg-[#0A031C] xl:h-[450px] md:h-[344px] sm:h-[190px]
        rounded-[20px] flex justify-center items-start
        bg-gradient-to-r from-lastNight-blue to-light-blue
        shadow-custom
        ">
           <div className=" xl:px-10 md:px-10 sm:px-4 w-[60%]">
                   <h1 className="sm:text-[12px] md:text-2xl xl:text-4xl text-main-white xl:my-6 md:my-6 sm:my-3 font-medium">Your personal cinema</h1>
                   <h1 className="sm:text-[12px] md:text-2xl xl:text-4xl text-main-white font-medium">on your devices</h1>
                    <h3 className="sm:text-[12px] md:text-2xl xl:text-2xl text-main-white xl:my-4 md:my-4 sm:my-2">All news in one place</h3>
                    <div className="xl:mt-10 md:mt-10 sm:mt-2">
                        <p className="xl:text-base md:text-base sm:text-[10px] text-main-white">
                            Enter confirmation code to comlete registeration
                        </p>
                        <div className=" flex justify-start items-center gap-4 mt-4">
                            <input
                                className="rounded-[10px] p-[10px] outline-none text-main-white
                                border-main-white border-solid  bg-midnight-blue border-[1px] placeholder:text-light-gray
                                xl:w-[180px] xl:h-[60px] md:w-[180px] md:h-[60px] sm:w-[60px] sm:h-[30px]
                                xl:rounded-[10px] md:rounded-[10px] sm:rounded-[5px] xl:text-base md:text-base sm:text-[11px]"
                                type="text"
                                placeholder="Code"
                            />
                            <button className="rounded-[10px] p-[10px] outline-none text-main-white bg-vibrant-pink text-xl cursor-pointer
                            hover:bg-[#E22267] xl:w-[180px] xl:h-[60px] md:w-[180px] md:h-[60px] sm:w-[100px] sm:h-[30px]
                            xl:rounded-[10px] md:rounded-[10px] sm:rounded-[5px] xl:text-base md:text-base sm:text-[11px]
                            flex justify-center items-center">
                                Get Started
                            </button>
                        </div>
                    </div>
           </div>
            <div className="w-[40%] flex xl:gap-4 md:gap-2 ml-2 sm:gap-1">
                <div className="w-[50%]">
                    <div className="mt-0 w-[100%] xl:h-[310px] md:h-[180px] sm:h-[140px]
                    bg-cover rounded-b-[20px]"
                         style={backgroundStyles1}>
                    </div>

                    <div className="w-[100%] xl:h-[124px] md:h-[162px] sm:h-[70px] xl:mt-4 md:mt-[-10px] sm:mt-[-20px] bg-cover
                    xl:rounded-t-[20px] md:rounded-t-[10px]"
                         style={backgroundStyles3}>
                    </div>
                </div>
                <div className="w-[50%]">
                    <div className="mt-0 w-[100%] xl:h-[260px] md:h-[140px] sm:h-[60px]
                    bg-cover xl:rounded-b-[20px] xl:rounded-tr-[20px] md:rounded-b-[10px] md:rounded-tr-[10px] "
                         style={backgroundStyles2}>
                    </div>

                    <div className="w-[100%] xl:h-[174px] md:h-[195px] sm:h-[140px] xl:mt-4 md:mt-2 bg-cover
                    xl:rounded-t-[20px] xl:rounded-br-[20px]  sm:mt-[-10px]
                     md:rounded-t-[10px] md:rounded-br-[10px]"
                         style={backgroundStyles4}>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuggestPreview;