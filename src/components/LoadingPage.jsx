import React from 'react';
import logo from '../assets/images/icons/PlayOn.svg'
import { motion } from "framer-motion"

const LoadingPage = () => {
    return (
        <motion.div
            className="w-[100%] h-[100vh] flex justify-center items-center bg-black"
            initial={{ opacity: 1}}
            animate={{ opacity: 0}}
            transition={{ duration: 3, ease: "easeInOut"}}
        >
            <div className="text-center">
                <img className="h-[100px]" src={logo} alt=""/>
                <h1 className="mt-6 text-main-white text-[30px]">WATCHING IS CRAZY</h1>
            </div>
        </motion.div>
    );
};

export default LoadingPage;