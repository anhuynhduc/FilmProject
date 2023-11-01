import {Continue1, Continue2, Continue3, Continue4} from "../../assets/images/continue-watching/index.js";
import iconNotification from '../../assets/images/icons/iconNotification.svg'
import {useState} from "react";

function ButtonNotification() {
    const [isListVisible, setListVisible] = useState(false);

    const notifications = [
        { icon: Continue1, text: "Soul 2020" },
        { icon: Continue2, text: "The Wolf of all street" },
        { icon: Continue3, text: "Elite 2018, season 2" },
        { icon: Continue4, text: "Euphoria 2019" },
    ];

    const toggleList = () => {
        setListVisible(!isListVisible);
    };

    return (
        <div className="relative">
            <button className="bg-transparent border-0 btn_icon btn-notification" onClick={toggleList}>
                <img
                    className="w-[25px]"
                    src={iconNotification}
                    alt="notification" />
            </button>

            <div className={`absolute w-40 overflow-y-auto max-h-72 p-2 rounded-lg z-10 
             bg-gray-800 shadow-md transition-opacity duration-350 
             ${isListVisible ? "opacity-100" : "opacity-0 hidden"} left-[-130px] top-10`}>
                {notifications.map((notification, index) => (
                    <a key={index} className="flex items-center gap-1 mt-2 cursor-pointer">
                        <img src={notification.icon} alt="" className="w-14" />
                        <span className="text-main-white hover:text-vibrant-pink text-xs w-36 truncate">
                            {notification.text}
                        </span>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default ButtonNotification;
