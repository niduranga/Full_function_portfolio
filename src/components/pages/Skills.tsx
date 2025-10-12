import React from 'react';
import {MySkills} from "../../utilities/data/dataFields.ts";

const Skills : React.FC = () => {
    return (
        <div className="flex flex-col">
            <main className="flex-grow py-16 px-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
                    {Object.entries(MySkills).map(([key, src]) => (
                        <div
                            key={key}
                            className="rounded-lg shadow-md p-4 flex justify-center items-center transition-transform hover:scale-105 hover:bg-red-50"
                        >
                            <img
                                src={src}
                                alt={key}
                                className="w-16 h-16 object-contain"
                                title={key.toUpperCase()}
                            />
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Skills;
