import React from 'react'
import Navbar from './Navbar'
import { useRef } from 'react'
import Projects from './Projects'
import About from './About'
import Computer from './Computer.json'
import Lottie from 'react-lottie'
import Contact from './Contact'
const Home = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Computer,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const connectMail = () =>{
        const recipientEmail= 'bhardwajshubhranshu@gmail.com';
        const subject= 'There is opportunity for you';
        const body= 'Hii, I have gone through your portfolio';
        window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      };

    const connectLinkedin =()=>{
        window.open('https://www.linkedin.com/in/shubhranshu-bhardwaj/', '_blank');
    }

    const projectsRef = useRef(null);
    const scrollToProjects = () => {
        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const aboutRef = useRef(null);
    const scrollToAbout = () => {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        
    };
    const contactRef=useRef(null);
    const scrollToContact=()=>{
        contactRef.current.scrollIntoView({behavior:'smooth'});
    }

    return (

        <div className='bg-black min-h-screen'>
            <Navbar
                scrollToProjects={scrollToProjects}
                scrollToAbout={scrollToAbout} 
                scrollToContact={scrollToContact}
                />

            {/* <div className="flex justify-start mb-32 mt-4">
                <div className="ml-3">
                    <Lottie
                        options={defaultOptions}
                        height={300} // Adjust height as needed
                        width={300} // Adjust width as needed
                    />
                </div>
                <div className='flex flex-col justify-center items-center ml-40 mt-8'>
                    <h2 className='text-white mt-4 text-2xl font-bold'>Hello, I'm</h2>
                    <h1 className='text-orange-500 text-5xl font-extrabold mt-6 mb-2'>Shubhranshu Bhardwaj</h1>
                    <h2 className='text-white text-3xl font-bold mb-4'>Web Developr</h2>
                    <p className='text-orange-400 text-xl font-semibold'>Explore my portfolio to know more</p>

                    <div className="flex mt-8">
                        <button className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded mr-4">Connect through mail</button>
                        <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">Connect on Linkedin</button>
                    </div>

                </div>
            </div> */}

<div className="flex flex-col lg:flex-row lg:justify-start mb-36 mt-4">
    <div className="lg:ml-3 mb-8 lg:mb-0">
        <Lottie
            options={defaultOptions}
            height={300} // Adjust height as needed
            width={300} // Adjust width as needed
        />
    </div>
    <div className='flex flex-col justify-center items-center lg:ml-40 mt-8 lg:mt-0'>
        <h2 className='text-white mt-4 text-2xl lg:text-3xl font-bold text-center lg:text-left'>Hello, I'm</h2>
        <h1 className='text-orange-500 text-4xl lg:text-5xl font-extrabold mt-4 lg:mt-6 mb-2'>Shubhranshu Bhardwaj</h1>
        <h2 className='text-white text-xl lg:text-3xl font-bold mb-4 text-center lg:text-left'>Web Developer</h2>
        <p className='text-orange-400 text-base lg:text-xl font-semibold text-center lg:text-left mb-8 lg:mb-4'>Explore my portfolio to know more</p>

        <div className="flex flex-col lg:flex-row items-center lg:items-start">
            <button onClick={connectMail} className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded mb-4 lg:mb-0 lg:mr-4">Connect through mail</button>
            <button onClick={connectLinkedin} className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">Connect on Linkedin</button>
        </div>
    </div>
</div>

            <div className='mt-6' ref={projectsRef}>
                <Projects />
            </div>
            <div className='mt-6' ref={aboutRef}>
                <About />
            </div>
            <div className='mt-6' ref={contactRef}>
                <Contact />
            </div>
        </div >
    )
}

export default Home