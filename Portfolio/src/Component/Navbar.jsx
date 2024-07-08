import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = ({ scrollToProjects, scrollToAbout, scrollToContact }) => {

    const [menu, setMenu] = useState(false);
    const handleMenu = () => {
        setMenu(!menu)
    };

    return (
        <>
            <nav className='bg-black p-4'>
                <div className='container mx-auto flex justify-between items-center'>
                    <div className='hidden md:flex space-x-4 ml-auto mr-4'>
                        <h3 className='text-white text-lg cursor-pointer hover:text-orange-500'><Link to='/'>Home</Link></h3>
                        <h3 className='text-white text-lg cursor-pointer hover:text-orange-500' onClick={scrollToProjects}>Projects</h3>
                        <h3 className='text-white text-lg cursor-pointer hover:text-orange-500' onClick={scrollToAbout}>About</h3>
                        <h3 className='text-white text-lg cursor-pointer hover:text-orange-500' onClick={scrollToContact}>Contact</h3>

                    </div>

                    <div className="md:hidden ml-auto mr-4">
                        <button onClick={handleMenu} className="text-white">
                            <FaBars size={24} />
                        </button>
                    </div>

                </div>
                {
                    menu && (
                        <div className='flex flex-col items-end'>
                            <div className='md:hidden'>
                                <h3 className='block text-white hover:text-gray-300 py-2'><Link to='/'>Home</Link></h3>
                                <h3 className='block text-white hover:text-gray-300 py-2' onClick={scrollToProjects}>Projects</h3>
                                <h3 className='block text-white hover:text-gray-300 py-2' onClick={scrollToAbout}>About</h3>
                                <h3 className='block text-white hover:text-gray-300 py-2' onClick={scrollToContact}>Contact</h3>

                            </div>
                        </div>
                    )
                }

            </nav>
        </>
    )
}

export default Navbar