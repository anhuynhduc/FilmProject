import {Continue1, Continue2, Continue3, Continue4} from "../../assets/images/continue-watching/index.js";
import iconNotification from '../../assets/images/icons/iconNotification.svg'
import {useEffect, useRef, useState} from "react";

function ButtonNotification() {
    const [isListVisible, setListVisible] = useState(false);

    let menuRef = useRef()

    const notifications = [
        { icon: Continue1, text: "Soul 2020" },
        { icon: Continue2, text: "The Wolf of all street" },
        { icon: Continue3, text: "Elite 2018, season 2" },
        { icon: Continue4, text: "Euphoria 2019" },
    ];

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)){
                setListVisible(false)
            }
        }
        document.addEventListener("mousedown", handler);
    })

    return (
        <div ref={menuRef} className="relative">
            <button className="bg-transparent border-0 btn_icon btn-notification" onClick={() => setListVisible(!isListVisible)}>
                <img
                    className="xl:w-[25px] md:w-[20px] md:mt-[4px] sm:hidden xl:block md:block"
                    src={iconNotification}
                    alt="notification" />
            </button>

            { isListVisible && <div className={`absolute w-auto overflow-y-auto max-h-72 p-4 rounded-lg z-10
             bg-gray-800 shadow-md transition-opacity duration-350 
             left-[-220px] top-12`}>
                <div className="">
                    <h1 className="text-main-white">Notification</h1>
                </div>
                {notifications.map((notification, index) => (
                    <a
                        onClick={() => setListVisible(false)}
                        key={index}
                        className="flex items-center gap-2 mt-1 cursor-pointer"
                    >
                        <img src={notification.icon} alt="" className="w-14 h-14"/>
                        <div className="text-main-white w-60 truncate">
                            <p className="text-[10px] text-red-500">new</p>
                            <p className="hover:text-vibrant-pink">{notification.text}</p>
                        </div>
                    </a>
                ))}
            </div>}
        </div>
    );
}

export default ButtonNotification;
