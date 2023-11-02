import React, { useState } from "react";
import userProfileIcon from "../../assets/images/icons/iconUser-profile.svg";

function UserProfile() {
    const [isProfileVisible, setProfileVisible] = useState(false);

    const profileOptions = ["Profile", "Settings", "Help", "Logout"];

    const toggleProfile = () => {
        setProfileVisible(!isProfileVisible);
    };
    // document.addEventListener("mousedown", () => setProfileVisible(false));
    return (
        <div className="relative">
            <button className="bg-transparent border-0 btn_icon btn-profile" onClick={toggleProfile}>
                <img src={userProfileIcon} alt="user-profile" className="h-7" />
            </button>

            <div className={`absolute w-24 px-4 py-2 bg-gray-800 rounded-lg shadow-md left-[-60px] top-10 z-10
            transition-opacity duration-350 ${isProfileVisible ? "opacity-100" : "opacity-0"}`}>
                {profileOptions.map((option, index) => (
                    <a key={index} className="block mt-2 text-gray-400 hover:text-vibrant-pink cursor-pointer">
                        {option}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default UserProfile;

