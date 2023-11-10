import React, {useState} from 'react';
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
import {iconEyeClose, iconEyeOpen} from "../assets/images/icons/index.js";

function Login () {
    const [showPassword, setShowPassword] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        const  data = new FormData(e.target)
        console.log(Object.fromEntries(data.entries()))
    }
    return (
        <div className="login">
            <header className="w-[95%] my-[30px] mx-[2.5%] flex justify-between items-center">
                <div className="logo">
                    <img src={logo} alt="logo" className="w-[130px]"/>
                </div>
                <ButtonLanguage/>
            </header>
            <div className="w-screen ml-0 xl:h-[650px] md:h-[1010px] sm:h-[580px] 2xl:h-[1250px] relative ">
                <div className="w-screen h-[100%] bg-midnight-blue">
                    <div className="w-screen h-[100%] bg-[#020510] z-[3] absolute opacity-[45%]"></div>
                    <div className="w-[100%] h-[100%] z-[2] flex justify-center items-center xl:gap-5 md:gap-2 sm:gap-1">
                        <div className="w-[50%] h-[100%]">
                            <img className="w-[100%] h-[38%] object-cover rounded-bl-[10px] rounded-br-[10px]" src={bannerForm1} alt=""/>
                            <img className="w-[100%] h-[59%] object-cover rounded-tl-[10px] rounded-tr-[10px]
                            xl:mt-5 md:mt-2 sm:mt-1" src={bannerForm6} alt=""/>
                        </div>
                        <div className="w-[50%] h-[100%]">
                            <img className="w-[100%] h-[55%] object-cover rounded-bl-[10px] rounded-br-[10px]" src={bannerForm2} alt=""/>
                            <img className="w-[100%] h-[42%] object-cover rounded-tl-[10px] rounded-tr-[10px]
                            xl:mt-5 md:mt-2 sm:mt-1" src={bannerForm7} alt=""/>
                        </div>
                        <div className="w-[50%] h-[100%]">
                            <img className="w-[100%] h-[35%] object-cover rounded-bl-[10px] rounded-br-[10px]" src={bannerForm3} alt=""/>
                            <img className="w-[100%] h-[62%] object-cover rounded-tl-[10px] rounded-tr-[10px]
                            xl:mt-5 md:mt-2 sm:mt-1" src={bannerForm8} alt=""/>
                        </div>
                        <div className="w-[50%] h-[100%]">
                            <img className="w-[100%] h-[60%] object-cover rounded-bl-[10px] rounded-br-[10px]" src={bannerForm4} alt=""/>
                            <img className="w-[100%] h-[37%] object-cover rounded-tl-[10px] rounded-tr-[10px]
                            xl:mt-5 md:mt-2 sm:mt-1" src={bannerForm9} alt=""/>
                        </div>
                        <div className="w-[50%] h-[100%]">
                            <img className="w-[100%] h-[40%] object-cover rounded-bl-[10px] rounded-br-[10px]" src={bannerForm5} alt=""/>
                            <img className="w-[100%] h-[57%] object-cover rounded-tl-[10px] rounded-tr-[10px]
                            xl:mt-5 md:mt-2 sm:mt-1" src={bannerForm10} alt=""/>
                        </div>
                    </div>
                    <div className="w-[100%] h-[100%] absolute z-[4] flex justify-center items-center left-0 top-0">
                        <div className="bg-main-white z-[4] absolute rounded-[10px] opacity-30
                        xl:h-[480px] xl:w-[450px] md:h-[480px] md:w-[450px] sm:h-[370px] sm:w-[350px] ">
                        </div>
                    </div>
                    <div className="w-[100%] h-[100%] absolute z-[5] flex justify-center items-center left-0 top-0">
                        <form
                            onSubmit={handleSubmit}
                            className="w-[300px] h-[300px] absolute"
                        >
                            <p className="text-[25px] leading-0 font-bold text-main-white">
                                Sign in
                            </p>
                            <input
                                type="text"
                                placeholder="Phone number"
                                name="phone"
                                className="w-[300px] h-[50px] p-[10px] rounded-[7px] border-none bg-[#161A27]
                                 mt-[30px] outline-none text-main-white placeholder:text-[13px]"
                            />
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                name="password"
                                className="w-[300px] h-[50px] p-[10px] rounded-[7px] border-none bg-[#161A27]
                                 mt-[30px] outline-none text-main-white placeholder:text-[13px]"
                            />
                            <button className="absolute top-[160px] right-[-40px]" onClick={() => setShowPassword(!showPassword)}>
                                <img className="w-[30px]" src={showPassword ? iconEyeOpen : iconEyeClose} alt="eyes"/>
                            </button>
                            <button
                                className="w-[300px] h-[50px] rounded-[7px] border-none bg-vibrant-pink
                                 mt-[30px] text-main-white text-[20px] cursor-pointer"
                                type="submit"
                            >
                                Sign in
                            </button>
                            <div className="flex justify-between items-center">
                                <div className="flex justify-start items-center gap-[7px] h-[50px]">
                                    <input
                                        className="w-[20px] h-[20px] bg-midnight-blue cursor-pointer"
                                        type="checkbox"
                                        name="code"
                                    />
                                    <label className="text-[11px] text-main-white">
                                        Remember me
                                    </label>
                                </div>
                                <a className="text-[12px] text-main-white" href="/home">Do not have an account ?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;