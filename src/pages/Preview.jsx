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
                    <button className="xl:w-[100px] xl:h-[45px] bg-vibrant-pink text-main-white hover:bg-[#E22267]
                    xl:text-[16px] border-none xl:rounded-[10px] md:w-[100px] sm:w-[70px] md:h-[45px] sm:h-[30px]
                    md:rounded-[10px] sm:rounded-[5px] md:text-[16px] sm:text-[13px]">
                        Sign in
                    </button>
                </div>
            </header>
            <div className="w-[95%] mx-[2.5%] ">
                <SuggestPreview/>
                <div className="w-[97%] ml-[1.5%] bg-midnight-blue mt-8 rounded-[20px] py-[50px] overflow-hidden
                xl:mt-0 md:mt-0 sm:mt-10">
                    <div className="flex justify-center items-center relative xl:mt-0 md:mt-0 sm:mt-[50px]">
                        <div className="relative flex xl:ml-[600px] md:ml-[400px]">
                            <div className="z-1 xl:w-[250px] xl:h-[390px] bg-[#4A2F4B] rounded-full blur-[90px]
                            xl:block md:block sm:hidden"></div>
                            <div className="z-1 xl:w-[300px] xl:h-[390px] bg-[#25344D] rounded-full blur-[50px]
                            xl:block md:block sm:hidden"></div>
                        </div>
                        <div className="absolute xl:left-[80px] md:left-[40px] sm:left-[20px]">
                            <h2 className="xl:text-4xl md:text-2xl sm:text-[13px] text-main-white font-medium">Watch everywhere</h2>
                            <p className="xl:text-2xl md:text-base sm:text-[10px] text-main-white mt-6">Play movies and series on all your</p>
                            <p className="xl:text-2xl md:text-base sm:text-[10px] text-main-white mt-4">devices: laptop, tablet, phone</p>
                        </div>
                        <div className="flex absolute justify-center items-center xl:right-0 md:right-[-50px] sm:right-[-30px]">
                            <img className="xl:w-[700px] md:x-[400px] sm:w-[220px]" src={Laptop} alt="pc"/>
                            <img className="absolute xl:top-56 xl:left-[320px] md:top-[180px] md:left-[210px] sm:top-[100px]
                            xl:w-[300px] md:w-[170px] sm:w-[70px] sm:left-[110px]" src={Ipad} alt="handle"/>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-40 xl:my-20 md:mt-[-150px] sm:mt-[180px]">
                        <div className="relative flex ml-[-650px]">
                            <div className=" mt-[-50px] z-1 w-[300px] h-[590px] bg-[#25344D] rounded-full blur-[50px]
                            xl:block md:block sm:hidden"></div>
                            <div className="mt-[200px] z-1 w-[300px] h-[290px] bg-[#5C4180] rounded-full blur-[90px]
                            xl:block md:block sm:hidden"></div>
                        </div>
                        <div className="absolute xl:left-[150px] md:left-[70px] sm:left-[50px]">
                            <img className="xl:w-auto md:w-[250px] sm:w-[130px]" src={Phone} alt=""/>
                            <div className="flex justify-center items-center p-2 bg-[#595B76] rounded-[10px] xl:ml-0 md:ml-[-10px]
                            opacity-80 mt-[-50px] border-[#8480A2] border-[1px] border-solid xl:gap-[30px] md:gap-[10px] sm:gap-[5px]
                            sm:ml-[-15px]">
                                <img className=" xl:w-auto md:h-[50px] sm:h-[30px]" src={Avengers} alt=""/>
                                <div className="">
                                    <p className="xl:text-xl md:text-base sm:text-[9px] text-main-white">Avengers end game</p>
                                    <p className="xl:text-base md:text-[13px] sm:text-[8px] text-vibrant-pink mt-2">Downloading... 15%</p>
                                </div>
                                <img className="xl:w-auto md:w-auto sm:w-[20px]" src={Download} alt=""/>
                            </div>
                        </div>
                        <div className="absolute xl:right-[150px] md:right-[70px] sm:right-[30px]">
                            <h2 className="xl:text-4xl md:text-2xl sm:text-[13px] text-main-white font-medium">Download and watch </h2>
                            <h2 className="xl:text-2xl md:text-base sm:text-[10px] text-main-white font-medium">offline</h2>
                            <p className="xl:text-2xl md:text-base sm:text-[10px] text-main-white mt-6">Available with a subscription</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-36 xl:mt-0 md:mt-[-150px] sm:mt-[180px]">
                        <div className="relative flex ml-[350px]">
                            <div className=" ml-[150px] mt-[50px] z-1 w-[400px] h-[490px] bg-[#25344D] rounded-full blur-[50px]
                            xl:block md:block sm:hidden"></div>
                            <div className=" z-1 w-[300px] h-[290px] bg-[#5C4180] rounded-full blur-[90px]
                            xl:block md:block sm:hidden"></div>
                        </div>
                        <div className="absolute xl:left-[150px] md:left-[70px] sm:left-[30px]">
                            <h2 className="xl:text-4xl md:text-2xl sm:text-[13px] text-main-white font-medium">Account for kids </h2>
                            <p className="xl:text-2xl md:text-base sm:text-[10px] text-main-white mt-6">Content restriction for children.</p>
                            <p className="xl:text-2xl md:text-base sm:text-[10px] text-main-white mt-4">Player blocking function</p>
                        </div>
                        <div className=" absolute xl:right-[200px] md:right-[150px] sm:right-[55px]">
                            <div className=" flex justify-start items-end xl:gap-3 md:gap-3 sm:gap-1">
                                <img className="xl:w-[200px] md:w-[100px] sm:w-[40px]" src={Dragon} alt="dragon"/>
                                <img className="xl:w-[150px] md:w-[75px] sm:w-[35px]" src={Prozen} alt="prozen"/>
                                <img className="xl:w-[150px] md:w-[75px] sm:w-[35px] object-cover rounded-[10px]" src={Home} alt="home"/>
                            </div>
                            <div className="">
                                <div className="flex justify-start mt-3 gap-3 relative">
                                    <div className="">
                                        <img className="xl:w-[170px] md:w-[85px] sm:w-[30px]" src={Raya} alt="raya"/>
                                        <div className="flex justify-center items-center xl:mt-4 md:mt-4 sm:mt-1 gap-2">
                                            <img className="xl:w-[30px] md:w-[30px] sm:w-[10px]" src={iconLock} alt="iconLock"/>
                                            <img className="xl:w-[30px] md:w-[30px] sm:w-[10px]" src={iconPlay} alt="iconPlay"/>
                                        </div>
                                    </div>
                                    <div className="">
                                        <img className="xl:w-[230px] md:w-[115px] sm:w-[40px] " src={Zootopie} alt="zootopie"/>
                                        <img className="xl:w-[230px] md:w-[115px] sm:w-[40px] xl:mt-3 md:mt-3 sm:mt-1" src={Encanto} alt="encano"/>
                                    </div>
                                    <div className="">
                                        <img className="absolute xl:left-[230px] md:left-[120px] sm:left-[40px] xl:top-[-85px]
                                        md:top-[-85px] sm:top-[-55px]" src={Lion} alt="lion"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center xl:mt-0 md:mt-[-150px] sm:mt-[-140px]">
                        <div className="relative flex ml-[-650px]">
                            <div className=" z-1 w-[300px] h-[290px] bg-[#5C4180] rounded-full blur-[90px]"></div>
                            <div className="mt-[200px] z-0 w-[400px] h-[490px] bg-[#25344D] rounded-full blur-[90px]"></div>
                        </div>
                        <div className="absolute xl:left-[50px] md:left-[30px] sm:left-[10px]">
                            <div className="flex relative">
                                <img className="xl:w-auto md:w-[400px] sm:w-[180px]" src={Pc} alt="pc"/>
                                <img className="absolute xl:top-56 xl:left-[390px] xl:w-auto md:w-[150px] sm:w-[70px]
                                md:top-[120px] sm:top-[50px] md:left-[200px] sm:left-[100px]" src={Handle} alt="handle"/>
                            </div>
                        </div>
                        <div className=" absolute xl:right-[150px] md:right-[70px] sm:right-[30px]">
                            <h2 className="xl:text-4xl md:text-2xl sm:text-[13px] text-main-white font-medium">Online cinema on TV</h2>
                            <p className="xl:text-2xl md:text-base sm:text-[10px] text-main-white mt-6">Watch on Smart TV, Playstation,</p>
                            <p className="xl:text-2xl md:text-base sm:text-[10px] text-main-white mt-4">Apple TV, and more</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-48 xl:mt-0 md:mt-[-150px] sm:mt-[-170px]">
                        <div className="relative flex ml-[350px]">
                            <div className=" absolute ml-[150px] z-1 w-[300px] h-[390px] bg-[#25344D] rounded-full blur-[50px]
                            xl:block md:block sm:hidden"></div>
                            <div className=" absolute ml-[300px] mt-[-50px] z-1 w-[200px] h-[290px] bg-[#786560] rounded-full blur-[90px]
                            xl:block md:block sm:hidden"></div>
                            <div className=" z-1 w-[300px] h-[390px] bg-[#5C4180] rounded-full blur-[90px]
                            xl:block md:block sm:hidden"></div>
                        </div>
                        <div className="absolute xl:left-[150px] md:left-[70px] sm:left-[30px]">
                            <h2 className="xl:text-4xl md:text-2xl sm:text-[13px] text-main-white font-medium">Family account</h2>
                            <p className="xl:text-2xl md:text-base sm:text-[10px] text-main-white mt-6">Connect up to 3 accounts in one</p>
                            <p className="xl:text-2xl md:text-base sm:text-[10px] text-main-white mt-4">subscription</p>
                        </div>
                        <div className="absolute xl:right-[150px] md:right-[70px] sm:right-[30px]">
                            <div className="flex relative xl:gap-4 md:gap-4 sm:gap-1">
                                <img className="xl:h-[220px] md:h-[120px] sm:h-[60px]" src={Alien} alt="alien"/>
                                <img className="xl:h-[220px] md:h-[120px] sm:h-[60px]" src={Kid} alt="kid"/>
                                <img className="xl:h-[220px] md:h-[120px] sm:h-[60px]" src={Fox} alt="fox"/>
                            </div>
                            <div className="flex xl:w-[450px] md:w-[220px] sm:w-[120px] justify-center items-center p-2 bg-[#595B76] rounded-[10px]
                            opacity-80 mt-[-30px] border-[#8480A2] border-[1px] border-solid xl:gap-28 md:gap-[30px] sm:gap-[10px] xl:ml-10
                            xl:rounded-[10px] md:rounded-[10px] sm:rounded-[3px] md:ml-10 sm:ml-3">
                                <div className="bg-gradient-to-r from-[#98FFB5] to-[#DAF899] xl:p-2 md:p-2 sm:p-1 rounded-full">
                                    <img className="xl:h-10 md:h-4 sm:h-3" src={iconUser} alt="iconUser"/>
                                </div>
                                <div className="bg-gradient-to-r from-[#D7ADD5] to-[#865AFD] xl:p-2 md:p-2 sm:p-1 rounded-full">
                                    <img className="xl:h-10 md:h-4 sm:h-3" src={iconUser} alt="iconUser"/>
                                </div>
                                <div className="bg-gradient-to-r from-[#95FCB4] to-[#074E55] xl:p-2 md:p-2 sm:p-1 rounded-full">
                                    <img className="xl:h-10 md:h-4 sm:h-3" src={iconUser} alt="iconUser"/>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="flex relative justify-center items-center xl:mt-0 md:mt-[-100px] sm:mt-[20px] gap-24">
                        <div className="relative flex ml-[-650px]">
                            <div className=" absolute z-1 w-[300px] h-[390px] bg-[#25344D] rounded-full blur-[50px]"></div>
                            <div className=" ml-[300px] z-1 w-[200px] h-[290px] bg-[#786560] rounded-full blur-[90px]"></div>
                        </div>

                        <img src={Full_Phone} alt="" className="w-[45%] absolute xl:left-[50px] md:left-[0px] sm:left-[10px]"/>
                        <div className="absolute xl:right-[100px] md:right-[50px] sm:right-[20px]">
                            <h2 className="xl:text-4xl md:text-2xl sm:text-[13px] text-main-white font-medium">Please do not disturb</h2>
                            <p className="xl:text-2xl md:text-base sm:text-[10px] text-main-white mt-6">Missing commercials while</p>
                            <p className="xl:text-2xl md:text-base sm:text-[10px] text-main-white mt-4">watching</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center xl:mt-28 md:mt-12 sm:mt-[-30px]">
                        <button className="xl:w-64 xl:h-16 md:w-48 md:h-14 sm:w-32 sm:h-10 bg-vibrant-pink text-main-white xl:text-xl rounded-[10px]
                        font-semibold hover:bg-[#E22267] cursor-pointer md:text-xl sm:text-base">
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