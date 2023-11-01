import React, {useState} from 'react';
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

    const [isMoodDropdownActive, setIsMoodDropdownActive] = useState(false);
    const [isSomebodyDropdownActive, setIsSomebodyDropdownActive] = useState(false);

    const toggleMoodDropdown = () => {
        setIsMoodDropdownActive(!isMoodDropdownActive);
        setIsSomebodyDropdownActive(false); // Ẩn dropdown khác
    }

    const toggleSomebodyDropdown = () => {
        setIsSomebodyDropdownActive(!isSomebodyDropdownActive);
        setIsMoodDropdownActive(false); // Ẩn dropdown khác
    }


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
        <div className="w-[90%] ml-[5%] mt-20 bg-[#0A031C] h-[450px]
        rounded-[20px] flex justify-center items-start
        bg-gradient-to-r from-lastNight-blue to-light-blue
        shadow-custom
        ">
           <div className=" px-10 w-[60%]">
                   <h1 className="text-4xl text-main-white my-6">Suggest what to </h1>
                   <h1 className="text-4xl text-main-white">see in the evening</h1>
               <div className=" flex justify-start items-center gap-4 mt-[180px]">
                   <ButtonDropdown
                       data={moodLists}
                       imageButtons={imageButtonMoods}
                       isActive={isMoodDropdownActive}
                       toggleDropdown={toggleMoodDropdown}
                   />
                   <ButtonDropdown
                       data={somebodyLists}
                       imageButtons={imageButtonSomebody}
                       isActive={isSomebodyDropdownActive}
                       toggleDropdown={toggleSomebodyDropdown}
                   />
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

export default Suggest;