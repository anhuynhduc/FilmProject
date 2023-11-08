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
const Suggest = () => {

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
        <div className="w-[90%] ml-[5%] xl:mt-20 md:mt-20 bg-[#0A031C] xl:h-[450px] md:h-[260px] sm:mt-10
        xl:rounded-[20px] md:rounded-[10px] flex justify-center items-start
        bg-gradient-to-r from-lastNight-blue to-light-blue
        shadow-custom
        ">
           <div className="md:px-5 xl:px-10 w-[60%] sm:px-2">
                   <h1 className="sm:text-[13px] md:text-2xl xl:text-4xl text-main-white xl:my-6 md:my-6
                   sm:my-1 ">
                       Suggest what to
                   </h1>
                   <h1 className="sm:text-[13px] md:text-2xl xl:text-4xl text-main-white">see in the evening</h1>
               <div className=" flex justify-start items-center xl:gap-4 xl:mt-[180px] md:mt-[60px] sm:mt-[40px]
               md:gap-4 sm:gap-2">
                   <ButtonDropdown
                       data={moodLists}
                       imageButtons={imageButtonMoods}
                   />
                   <ButtonDropdown
                       data={somebodyLists}
                       imageButtons={imageButtonSomebody}
                   />
               </div>
           </div>
            <div className="w-[40%] flex xl:gap-4 md:gap-4 sm:gap-1 ml-2">
                <div className="w-[50%]">
                    <div className="mt-0 w-[100%] xl:h-[310px] md:h-[160px]  sm:h-[100px]
                    bg-cover rounded-b-[20px]"
                         style={backgroundStyles1}>
                    </div>

                    <div className="w-[100%] xl:h-[124px] md:h-[100px] sm:h-[40px] xl:mt-4 bg-cover
                    xl:rounded-t-[20px] md:rounded-t-[10px] md:mt-0 sm:mt-[-20px]"
                         style={backgroundStyles3}>
                    </div>
                </div>
                <div className="w-[50%]">
                    <div className="mt-0 w-[100%] xl:h-[260px] md:h-[120px] md:rounded-tr-[10px] sm:h-[35px]
                    bg-cover xl:rounded-b-[20px] xl:rounded-tr-[20px] sm:rounded-b-[5px]"
                         style={backgroundStyles2}>
                    </div>

                    <div className="w-[100%] xl:h-[174px] xl:mt-4 md:mt-2 sm:mt-1 bg-cover md:h-[130px] sm:h-[80px]
                    md:rounded-t-[10px] md:rounded-br-[10px] xl:rounded-t-[20px] xl:rounded-br-[20px]"
                         style={backgroundStyles4}>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Suggest;