import React from 'react';

const About: React.FC = () => {
    return (
        <div className="flex justify-center items-center px-4 py-10 bg-gray-100 min-h-screen">
            <div className="max-w-3xl bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition duration-300 ease-in-out">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                    About Me
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    I am a <span className="font-semibold text-blue-600 dark:text-blue-400">Software Engineering</span> student at <span className="font-semibold text-purple-600 dark:text-purple-400">BCI</span>, where I pursue my passion for software development and learning new technologies.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                    I have a strong foundation in programming languages like <span className="font-semibold">PHP</span>, and web development technologies including <span className="font-semibold">HTML</span>, <span className="font-semibold">CSS</span>, <span className="font-semibold">JavaScript</span>, <span className="font-semibold">React.js</span>, and <span className="font-semibold">Laravel</span>.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                    I’ve completed certificate courses in <span className="font-semibold">Python for Data Science</span> from <span className="font-semibold">IBM</span>, and furthered my knowledge of Laravel, React, and React Native through the <span className="font-semibold">CoddingGura Institute</span>.
                </p>
            </div>
        </div>
    );
};

export default About;
