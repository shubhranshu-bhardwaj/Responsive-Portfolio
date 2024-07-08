import React from 'react';
import img1 from './Images/img1.png';
import img2 from './Images/img2.png';
import img3 from './Images/img3.png';
import img4 from './Images/img4.png';
import img5 from './Images/img5.png';
import img6 from './Images/img6.png';
import img8 from './Images/img8.png';
import img9 from './Images/img9.png';
import img10 from './Images/img10.png';
import img11 from './Images/img11.png';

const Projects = () => {
  // Project data
  const projects = [
    {
      title: 'Blog Share',
      imageUrl: img1,
      description: 'Developed the frontend using React.js for an interactive and dynamic user experience. Implemented the backend with Express.js and MongoDB for efficient data management and server operations. Enabled users to create and post blogs, fostering a community of shared knowledge and experiences.',
    },
    {
      title: 'SGPA Calculator',
      imageUrl: img2,
      description: 'The SGPA Calculator is a web-based application designed to help students calculate their Semester Grade Point Average (SGPA) and Cumulative Grade Point Average (CGPA) efficiently. Built using HTML, CSS, and JavaScript, this calculator provides a user-friendly interface for inputting grades and credits for each course taken during a semester',
    },
    {
      title: 'Weather App',
      imageUrl: img3,
      description: "The Weather Application is a dynamic web app developed using ReactJS, designed to provide real-time updates on weather conditions.Offers live weather data, ensuring users have the most current information.Integrated with a reliable weather API to deliver accurate weather forecasts and current conditions, enhancing the app's functionality and user experience.",
    },
    {
        title: "IMDB Clone",
        imageUrl: img4,
        description: "The IMDB Clone is a web application developed using Vite, ReactJS, and the TMDB API for data retrieval.Allows users to explore Popular, Upcoming, and Top Rated movies.Provides comprehensive details for each movie, including descriptions, ratings, and more."
      },
      {
        title: "Image Resizer",
        imageUrl: img5,
        description: "The Image Resizer is a web application created using HTML, CSS, and JavaScript.Users can upload images directly from their devices.Provides the functionality to download resized images."
      },
      {
        title:'Home For You',
        imageUrl: img6,
        description:"Developed a real estate website for listing and enquiring properties. HTML, CSS, and JavaScript used in frontend. Created a SQL database and connected using PHP."
      },
      {
        title:'Background Changer',
        imageUrl: img11,
        description:"The Background Changer project is a simple yet effective application built with React.js. This project leverages the power of React's useState and useEffect hooks to create a dynamic user experience. By clicking a button, users can seamlessly change the background color of the application, demonstrating the practical application of state management and side effects in React."
      },
      {
        title:'Password Generator',
        imageUrl: img8,
        description:"The Password Generator project is a versatile application built using React.js, designed to help users create secure and customizable passwords. This project showcases the use of React's useState, useRef, and useCallback hooks to provide a seamless and interactive experience."
      },
      {
        title:'BMI Calculator',
        imageUrl: img9,
        description:"The BMI Calculator project is a simple and effective tool built using JavaScript. This application calculates the Body Mass Index (BMI) of users based on their height and weight inputs and categorizes the result into different weight ranges. "
      },
      {
        title:'Quote Generator',
        imageUrl: img10,
        description:"The Quote Generator project is a React.js application designed to fetch and display inspirational quotes from an API. This project demonstrates the use of React's useEffect hook to manage side effects, particularly data fetching. "
      }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className='text-white text-4xl font-bold mb-6 text-center'>Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project,index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full object-cover"
            />
            <h2 className="text-white text-lg font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-400">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
