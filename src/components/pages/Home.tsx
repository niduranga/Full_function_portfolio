import React from 'react';
import { FaReact } from "react-icons/fa6";
import {FaLaravel} from "react-icons/fa";

const Home :React.FC = () => {
    return (
        <div>
            <div>
                <img src="../../../public/web.png" alt="Niduranga" className="md:h-[700px] md:w-[900px] w-full h-96 absolute bottom-0 left-1/2 transform -translate-x-1/2"/>
                <h1 className="z-0 flex justify-center md:mt-1 font-bold md:text-9xl mt-24 text-6xl">I'm a Software</h1>
                <h1 className="z-0 flex justify-center mt-1 font-bold md:text-9xl text-6xl">Engineer</h1>
            </div>
            <FaLaravel className="hidden md:block text-gray-900 z-0 ml-[1300px] text-5xl mt-24"/>
            <FaReact className="hidden md:block text-blue-600 z-0 ml-[520px] mt-60 text-5xl"/>
        </div>
    );
};

export default Home;
