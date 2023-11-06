import React, {useEffect, useRef, useState} from "react";
import UserIcon from "../../assets/images/icons/iconUser-profile.svg";
import userProfileIcon from "../../assets/images/icons/iconUserProfile.jpeg";
import {iconComment, iconHelp, iconLogout, iconMoon, iconSetting} from "../../assets/images/icons/index.js";

function UserProfile() {
    const [isProfileVisible, setProfileVisible] = useState(false);

    let menuRef = useRef()

    const profileOptions = [
            {
                id: 1,
                icon: iconSetting,
                action: "Settings and privacy",
            },
            {
                id: 2,
                icon: iconHelp,
                action: "Help and support",
            },
            {
                id: 3,
                icon: iconMoon,
                action: "Screen and accessibility",
            },
            {
                id: 4,
                icon: iconComment,
                action: "Comments",
            },
            {
                id: 5,
                icon: iconLogout,
                action: "Logout",
            }
        ];

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)){
                setProfileVisible(false)
            }
        }
        document.addEventListener("mousedown", handler);
    })

    return (
        <div  ref={menuRef} className="relative">
            <button className="bg-transparent border-0 btn_icon btn-profile" onClick={() => setProfileVisible(!isProfileVisible)}>
                <img src={UserIcon} alt="user-profile" className="h-7" />
            </button>

            {isProfileVisible && <ul className={`absolute w-auto px-4 py-2 bg-gray-800 rounded-lg shadow-md 
            left-[-220px] top-12 z-10 transition-opacity duration-350 flex flex-col justify-center items-start
            `}>
                <div className="flex justify-start items-center p-2 rounded-[10px] gap-2  w-[100%] ">
                    <img className="h-10 w-10 rounded-full object-cover" src={userProfileIcon} alt=""/>
                    <span className="text-main-white text-xl">Johny</span>
                </div>
                {profileOptions.map((option, index) => (
                    <li key={index} className="w-[100%] p-2 hover:bg-[#1b232e] flex justify-start items-center
                    rounded-[10px]
                    ">
                        <div className="flex justify-start items-center gap-2">
                            <img className="h-5" src={option.icon} alt={option.action}/>
                            <a
                                onClick={() => setProfileVisible(false)}
                                className="block mt-2 text-gray-400 cursor-pointer"
                            >
                                <p>
                                     {option.action}
                                </p>
                            </a>
                        </div>
                    </li>
                ))}
            </ul>}
        </div>
    );
}

export default UserProfile;

