import React from 'react';
import myImage from "./../../assets/web.png"

const Home :React.FC = () => {
    return (
        <div>
            <div className="flex min-h-screen bg-gray-100">
                <div className="w-full flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold">
                        I'm a Full Stack
                    </h1>
                    <h1 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold">
                        Software Engineer
                    </h1>
                    <div className="items-center mt-5">
                        <img src={myImage}
                             alt="Niduranga Jayarathna"
                             className="md:w-[500px] md:h-[500px] w-[400px] h-[400px] rounded-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
