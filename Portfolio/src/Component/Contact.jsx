import React from 'react';

const Contact = () => {
  return (
    <div className="px-4 py-8 bg-black">
      <h1 className="text-white text-center text-4xl font-bold mb-8">Contact</h1>
      <div className="flex flex-col justify-center items-center bg-gray-800 p-6 rounded-lg shadow-lg w-4/5 sm:w-3/5 lg:w-2/5 mx-auto mb-8">
        <h2 className="text-white text-2xl mb-4">Shubhranshu Bhardwaj</h2>
        <div className="flex flex-wrap justify-center items-center space-x-4">
          <button 
            className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded mb-4 sm:mb-0"
            onClick={() => window.location = 'mailto:bhardwajshubhranshu@gmail.com'}>
            Mail
          </button>
          <button 
            className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mb-4 sm:mb-0"
            onClick={() => window.open('https://www.linkedin.com/in/shubhranshu-bhardwaj/', '_blank')}>
            Linkedin
          </button>
          <button 
            className="bg-pink-500 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded mb-4 sm:mb-0"
            onClick={() => window.open('https://www.instagram.com/shubhranshu_bhardwaj/?hl=en', '_blank')}>
            Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
