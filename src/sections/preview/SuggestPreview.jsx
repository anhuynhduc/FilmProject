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
        <div className="w-[97%] ml-[1.5%] bg-[#0A031C] h-[450px]
        rounded-[20px] flex justify-center items-start
        bg-gradient-to-r from-lastNight-blue to-light-blue
        shadow-custom
        ">
           <div className=" px-10 w-[60%]">
                   <h1 className="text-4xl text-main-white my-6 font-medium">Your personal cinema</h1>
                   <h1 className="text-4xl text-main-white font-medium">on your devices</h1>
                    <h3 className="text-2xl text-main-white my-4">All news in one place</h3>
                    <div className="mt-10">
                        <p className="text-base text-main-white">
                            Enter confirmation code to comlete registeration
                        </p>
                        <div className=" flex justify-start items-center gap-4 mt-4">
                            <input
                                className="w-[180px] h-[60px] rounded-[10px] p-[10px] outline-none text-main-white
                                border-main-white border-solid  bg-midnight-blue border-[1px] placeholder:text-light-gray"
                                type="text"
                                placeholder="Code"
                            />
                            <button className="w-[180px] h-[60px] rounded-[10px] p-[10px] outline-none text-main-white
                            bg-vibrant-pink text-xl cursor-pointer hover:bg-[#E22267]">
                                Get Started
                            </button>
                        </div>
                    </div>
           </div>
            <div className="w-[40%] flex gap-4 ml-2">
                <div className="w-[50%]">
                    <div className="mt-0 w-[100%] h-[310px]
                    bg-cover rounded-b-[20px]"
                         style={backgroundStyles1}>
                    </div>

                    <div className="w-[100%] h-[124px] mt-4 bg-cover rounded-t-[20px]"
                         style={backgroundStyles3}>
                    </div>
                </div>
                <div className="w-[50%]">
                    <div className="mt-0 w-[100%] h-[260px]
                    bg-cover rounded-b-[20px] rounded-tr-[20px]"
                         style={backgroundStyles2}>
                    </div>

                    <div className="w-[100%] h-[174px] mt-4 bg-cover rounded-t-[20px] rounded-br-[20px] "
                         style={backgroundStyles4}>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuggestPreview;