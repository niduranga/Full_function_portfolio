import React from 'react';

const About: React.FC = () => {
    return (
        <div className="flex items-center justify-center px-4 py-10 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
                {/* Card 1 */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-bold mb-2">Introduction</h2>
                    <p className="text-gray-600">I am a software engineering student at BCI,
                        where I am pursuing my passion for software development
                        and learning new technologies. I have a strong foundation
                        in programming languages such as PHP, and web development
                        technologies such as HTML, CSS, JavaScript, React.js, laravel.
                        I have also completed certificate courses in Python for Data Science from
                        IBM, and learned more about laravel and React and React Native on CoddingGura
                        Institute.</p>
                </div>

                {/* Card 2 */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-bold mb-2">Background</h2>
                    <p className="text-gray-600 mb-2">Name: Niduranga Jayarathna</p>
                    <p className="text-gray-600 mb-2">Birthday: March 12</p>
                    <p className="text-gray-600 mb-2">Gender: Male (He/Him/His)</p>
                    <p className="text-gray-600 mb-2">Location: Sri Lanka (GMT+5:30)</p>
                    <p className="text-gray-600 mb-2">Communicate: English & Sinhala</p>
                </div>

                {/* Card 3 */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-bold mb-2">Goals</h2>
                    <p className="text-gray-600 mb-2">Follow: Software Engineering Degree</p>
                    <p className="text-gray-600 mb-2">Practice: Software Development with standard level</p>
                </div>

                {/* Card 4 */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-bold mb-2">Interests</h2>
                    <p className="text-gray-600 mb-2">Watch: Movies & TV Shows</p>
                    <p className="text-gray-600 mb-2">Programming: Using Design Principles</p>
                </div>
            </div>
        </div>
    );
};

export default About;
