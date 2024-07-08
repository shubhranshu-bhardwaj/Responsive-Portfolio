import React from 'react';
import Lottie from 'react-lottie';
import languagesAnimation from './Languages.json'; 
import frontendAnimation from './Frontend.json'; 
import databaseAnimation from './Database.json'; 

const defaultOptions = (animationData) => ({
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
});

const About = () => {
    return (
        <div className="px-4 py-8 bg-black min-h-screen">
            <h1 className="text-white text-center text-4xl font-bold mb-8">About</h1>
            <div className="flex flex-col lg:flex-row justify-center items-start lg:space-x-8">
                
                <div className="w-full lg:w-1/2">
                   
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        
                        <p className="text-gray-300 text-lg mb-6">
                            I am a recent graduate with a Bachelor of Engineering in Computer Science and Engineering.
                            I am passionate about technology and constantly seeking opportunities to learn and grow in this dynamic field.
                            I have a solid foundation in various programming languages and technologies.
                        </p>
                       
                        <div className="bg-gray-700 p-4 rounded-lg shadow-md mt-6">
                            <h2 className="text-white text-2xl font-bold mb-4">Technical Skills</h2>
                            <div className="mb-4">
                                <h3 className="text-orange-400 text-xl font-semibold mb-2">Programming Languages</h3>
                                <ul className="list-disc list-inside text-gray-300">
                                    <li>C++</li>
                                    <li>Java</li>
                                    <li>Python</li>
                                </ul>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-orange-400 text-xl font-semibold mb-2">Web Development</h3>
                                <ul className="list-disc list-inside text-gray-300">
                                    <li>ReactJs</li>
                                    <li>JavaScript</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Tailwind</li>
                                    <li>ExpressJs</li>
                                    <li>SQL</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-orange-400 text-xl font-semibold mb-2">Database</h3>
                                <ul className="list-disc list-inside text-gray-300">
                                    <li>MySql</li>
                                    <li>MongoDB</li>
                                </ul>
                            </div>
                            <div>
                            <h2 className="text-white text-2xl font-bold mb-4 mt-4">Soft Skills</h2>
                                <ul className="list-disc list-inside text-gray-300">
                                    <li>Leadership</li>
                                    <li>Team player</li>
                                    <li>Management</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

               
                <div className="w-full lg:w-1/2 flex flex-col space-y-8 mt-8 lg:mt-0">
                    <Lottie options={defaultOptions(languagesAnimation)} height={300} width={250} />
                    <Lottie options={defaultOptions(frontendAnimation)} height={300} width={250} />
                    <Lottie options={defaultOptions(databaseAnimation)} height={250} width={250} />
                </div>
            </div>
        </div>
    );
}

export default About;
