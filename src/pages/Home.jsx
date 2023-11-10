import React, {useEffect, useState} from 'react';
import LoadingPage from "../components/LoadingPage.jsx";
import WrapperHome from "../sections/home/WrapperHome.jsx";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);
    return (
        <main className="relative">
            {isLoading ? <LoadingPage /> : <WrapperHome/>}
        </main>
    );
};

export default Home;