import React from 'react';
import logo from "../assets/images/icons/iconLogo.svg";
import ButtonLanguage from "../components/home/ButtonLanguage.jsx";
import SuggestPreview from "../sections/preview/SuggestPreview.jsx";
import {
    Avengers, Download, Dragon, Laptop, Phone, Prozen, Home, Handle,
    Raya, Zootopie, iconPlay, iconLock, iconUser, iconNext, Encanto, Lion, Pc, Alien, Kid, Fox, Full_Phone, Ipad
} from "../assets/images/previews/index.js";
import Footer from "../components/Footer.jsx";
const Preview = () => {
    return (
        <div className="preview">
            <header className="w-[95%] my-[30px] mx-[2.5%] flex justify-between items-center">
                <div className="logo">
                    <img src={logo} alt="logo" className="w-[130px]"/>
                </div>
                <div className="flex justify-center items-center gap-5">
                    <ButtonLanguage/>
                    <button className="w-[100px] h-[45px] bg-vibrant-pink text-main-white hover:bg-[#E22267]
                    text-[16px] border-none rounded-[10px]">
                        Sign in
                    </button>
                </div>
            </header>
            <div className="w-[95%] mx-[2.5%] ">
                <SuggestPreview/>
                <div className="w-[97%] ml-[1.5%] bg-midnight-blue mt-8 rounded-[20px] py-[50px] overflow-hidden">
                    <div className="flex justify-center items-center relative">
                        <div className="relative flex ml-[600px]">
                            <div className="z-1 w-[250px] h-[390px] bg-[#4A2F4B] rounded-full blur-[90px]"></div>
                            <div className="z-1 w-[300px] h-[390px] bg-[#25344D] rounded-full blur-[50px]"></div>
                        </div>
                        <div className="absolute left-[80px]">
                            <h2 className="text-4xl text-main-white font-medium">Watch everywhere</h2>
                            <p className="text-2xl text-main-white mt-6">Play movies and series on all your</p>
                            <p className="text-2xl text-main-white mt-4">devices: laptop, tablet, phone</p>
                        </div>
                        <div className="flex absolute justify-center items-center right-0">
                            <img className="w-[700px]" src={Laptop} alt="pc"/>
                            <img className="absolute top-56 left-[320px] w-[300px]" src={Ipad} alt="handle"/>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-40 my-20">
                        <div className="relative flex ml-[-650px]">
                            <div className=" mt-[-50px] z-1 w-[300px] h-[590px] bg-[#25344D] rounded-full blur-[50px]"></div>
                            <div className="mt-[200px] z-1 w-[300px] h-[290px] bg-[#5C4180] rounded-full blur-[90px]"></div>
                        </div>
                        <div className="absolute left-[150px]">
                            <img className="" src={Phone} alt=""/>
                            <div className="flex justify-center items-center p-2 bg-[#595B76] rounded-[10px]
                            opacity-80 mt-[-50px] border-[#8480A2] border-[1px] border-solid gap-[30px]">
                                <img className="" src={Avengers} alt=""/>
                                <div className="">
                                    <p className="text-xl text-main-white">Avengers end game</p>
                                    <p className="text-base text-vibrant-pink mt-2">Downloading... 15%</p>
                                </div>
                                <img className="" src={Download} alt=""/>
                            </div>
                        </div>
                        <div className="absolute right-[150px]">
                            <h2 className="text-4xl text-main-white font-medium">Download and watch </h2>
                            <h2 className="text-4xl text-main-white font-medium">offline</h2>
                            <p className="text-2xl text-main-white mt-6">Available with a subscription</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-36">
                        <div className="relative flex ml-[350px]">
                            <div className=" ml-[150px] mt-[50px] z-1 w-[400px] h-[490px] bg-[#25344D] rounded-full blur-[50px]"></div>
                            <div className=" z-1 w-[300px] h-[290px] bg-[#5C4180] rounded-full blur-[90px]"></div>
                        </div>
                        <div className="absolute left-[150px]">
                            <h2 className="text-4xl text-main-white font-medium">Account for kids </h2>
                            <p className="text-2xl text-main-white mt-6">Content restriction for children.</p>
                            <p className="text-2xl text-main-white mt-4">Player blocking function</p>
                        </div>
                        <div className=" absolute right-[200px]">
                            <div className=" flex justify-start items-end gap-3">
                                <img className="w-[200px]" src={Dragon} alt="dragon"/>
                                <img className="w-[150px]" src={Prozen} alt="prozen"/>
                                <img className="w-[150px] h-[150px] object-cover rounded-[10px]" src={Home} alt="home"/>
                            </div>
                            <div className="">
                                <div className="flex justify-start mt-3 gap-3 relative">
                                    <div className="">
                                        <img className="w-[170px]" src={Raya} alt="raya"/>
                                        <div className="flex justify-center items-center mt-4 gap-2">
                                            <img className="w-[30px]" src={iconLock} alt="iconLock"/>
                                            <img className="w-[30px]" src={iconPlay} alt="iconPlay"/>
                                        </div>
                                    </div>
                                    <div className="">
                                        <img className="w-[230px]" src={Zootopie} alt="zootopie"/>
                                        <img className="w-[230px] mt-3" src={Encanto} alt="encano"/>
                                    </div>
                                    <div className="">
                                        <img className="absolute left-[230px] top-[-85px]" src={Lion} alt="lion"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="relative flex ml-[-650px]">
                            <div className=" z-1 w-[300px] h-[290px] bg-[#5C4180] rounded-full blur-[90px]"></div>
                            <div className="mt-[200px] z-0 w-[400px] h-[490px] bg-[#25344D] rounded-full blur-[90px]"></div>
                        </div>
                        <div className="absolute left-[50px]">
                            <div className="flex relative">
                                <img className="" src={Pc} alt="pc"/>
                                <img className="absolute top-56 left-[390px]" src={Handle} alt="handle"/>
                            </div>
                        </div>
                        <div className=" absolute right-[150px]">
                            <h2 className="text-4xl text-main-white font-medium">Online cinema on TV</h2>
                            <p className="text-2xl text-main-white mt-6">Watch on Smart TV, Playstation,</p>
                            <p className="text-2xl text-main-white mt-4">Apple TV, and more</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-40 gap-48">
                        <div className="relative flex ml-[350px]">
                            <div className=" absolute ml-[150px] z-1 w-[300px] h-[390px] bg-[#25344D] rounded-full blur-[50px]"></div>
                            <div className=" absolute ml-[300px] mt-[-50px] z-1 w-[200px] h-[290px] bg-[#786560] rounded-full blur-[90px]"></div>
                            <div className=" z-1 w-[300px] h-[390px] bg-[#5C4180] rounded-full blur-[90px]"></div>
                        </div>
                        <div className="absolute left-[150px]">
                            <h2 className="text-4xl text-main-white font-medium">Family account</h2>
                            <p className="text-2xl text-main-white mt-6">Connect up to 3 accounts in one</p>
                            <p className="text-2xl text-main-white mt-4">subscription</p>
                        </div>
                        <div className="absolute right-[150px]">
                            <div className="flex relative gap-4">
                                <img className="h-[220px]" src={Alien} alt="alien"/>
                                <img className="h-[220px]" src={Kid} alt="kid"/>
                                <img className="h-[220px]" src={Fox} alt="fox"/>
                            </div>
                            <div className="flex w-[450px] justify-center items-center p-2 bg-[#595B76] rounded-[10px]
                            opacity-80 mt-[-30px] border-[#8480A2] border-[1px] border-solid gap-28 ml-10 ">
                                <div className="bg-gradient-to-r from-[#98FFB5] to-[#DAF899] p-2 rounded-full">
                                    <img className="h-10" src={iconUser} alt="iconUser"/>
                                </div>
                                <div className="bg-gradient-to-r from-[#D7ADD5] to-[#865AFD] p-2 rounded-full">
                                    <img className="h-10" src={iconUser} alt="iconUser"/>
                                </div>
                                <div className="bg-gradient-to-r from-[#95FCB4] to-[#074E55] p-2 rounded-full">
                                    <img className="h-10" src={iconUser} alt="iconUser"/>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="flex relative justify-center items-center mt-28 gap-24">
                        <div className="relative flex ml-[-650px]">
                            <div className=" absolute z-1 w-[300px] h-[390px] bg-[#25344D] rounded-full blur-[50px]"></div>
                            <div className=" ml-[300px] z-1 w-[200px] h-[290px] bg-[#786560] rounded-full blur-[90px]"></div>
                        </div>

                        <img src={Full_Phone} alt="" className="w-[45%] absolute left-[50px]"/>
                        <div className="absolute right-[100px]">
                            <h2 className="text-4xl text-main-white font-medium">Please do not disturb</h2>
                            <p className="text-2xl text-main-white mt-6">Missing commercials while</p>
                            <p className="text-2xl text-main-white mt-4">watching</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-28">
                        <button className="w-64 h-16 bg-vibrant-pink text-main-white text-xl rounded-[10px]
                        font-semibold hover:bg-[#E22267] cursor-pointer">
                            Buy for 50$
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Preview;