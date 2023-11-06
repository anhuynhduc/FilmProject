import React from 'react';
import logo from "../assets/images/icons/iconLogo.svg";
import ButtonLanguage from "../components/home/ButtonLanguage.jsx";
import {
    bannerForm1, bannerForm10,
    bannerForm2,
    bannerForm3, bannerForm4, bannerForm5,
    bannerForm6,
    bannerForm7,
    bannerForm8, bannerForm9
}
    from "../assets/images/form/index.js";

function PaymentSuccess () {
    return (
        <div className="payment">
            <header className="w-[95%] my-[30px] mx-[2.5%] flex justify-between items-center">
                <div className="logo">
                    <img src={logo} alt="logo" className="w-[130px]"/>
                </div>
                <ButtonLanguage/>
            </header>
            <div className="w-screen ml-0 h-[650px] relative ">
                <div className="w-screen h-[100%] bg-midnight-blue">
                    <div className="w-screen h-[100%] bg-[#020510] z-[3] absolute opacity-[45%]"></div>
                    <div className="w-[100%] h-[100%] z-[2] flex justify-center items-center gap-5">
                        <div className="w-[50%] h-[100%]">
                            <img className="w-[100%] h-[250px] object-cover rounded-bl-[10px] rounded-br-[10px]" src={bannerForm1} alt=""/>
                            <img className="w-[100%] h-[380px] object-cover rounded-tl-[10px] rounded-tr-[10px] mt-5" src={bannerForm6} alt=""/>
                        </div>
                        <div className="w-[50%] h-[100%]">
                            <img className="w-[100%] h-[55%] object-cover rounded-bl-[10px] rounded-br-[10px]" src={bannerForm2} alt=""/>
                            <img className="w-[100%] h-[42%] object-cover rounded-tl-[10px] rounded-tr-[10px] mt-5" src={bannerForm7} alt=""/>
                        </div>
                        <div className="w-[50%] h-[100%]">
                            <img className="w-[100%] h-[250px] object-cover rounded-bl-[10px] rounded-br-[10px]" src={bannerForm3} alt=""/>
                            <img className="w-[100%] h-[380px] object-cover rounded-tl-[10px] rounded-tr-[10px] mt-5" src={bannerForm8} alt=""/>
                        </div>
                        <div className="w-[50%] h-[100%]">
                            <img className="w-[100%] h-[370px] object-cover rounded-bl-[10px] rounded-br-[10px]" src={bannerForm4} alt=""/>
                            <img className="w-[100%] h-[260px] object-cover rounded-tl-[10px] rounded-tr-[10px] mt-5" src={bannerForm9} alt=""/>
                        </div>
                        <div className="w-[50%] h-[100%]">
                            <img className="w-[100%] h-[270px] object-cover rounded-bl-[10px] rounded-br-[10px]" src={bannerForm5} alt=""/>
                            <img className="w-[100%] h-[355px] object-cover rounded-tl-[10px] rounded-tr-[10px] mt-5" src={bannerForm10} alt=""/>
                        </div>
                    </div>
                    <div className="w-[100%] h-[100%] absolute z-[4] flex justify-center items-center left-0 top-0">
                        <div className="h-[480px] w-[450px] bg-main-white z-[4] absolute rounded-[10px] opacity-30">
                        </div>
                    </div>
                    <div className="w-[100%] h-[100%] absolute z-[5] flex justify-center items-center left-0 top-[70px]">
                        <form className="w-[300px] h-[300px] absolute">
                            <div className="text-center">
                                <p className="text-[25px] leading-0 font-bold text-main-white">
                                    Payment was
                                </p>
                                <p className="text-[25px] leading-0 font-bold text-main-white mt-[50px]">
                                    successful!
                                </p>
                            </div>
                            <button
                                className="w-[300px] h-[50px] rounded-[7px] border-none bg-vibrant-pink
                                 mt-[30px] text-main-white text-[20px] cursor-pointer"
                                type="submit"
                            >
                                Go to view
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccess;

