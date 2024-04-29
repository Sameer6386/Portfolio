import React from 'react';
import { Link } from 'react-router-dom'; 
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';

const Hero = () => {
  return (
    <div className='relative pt-16 pb-20 sm:pb-16 overflow-hidden h-[92vh]'>
      <div className="px-4 mx-auto max-w-7xl sm:px-8 relative z-20">
        <div className='max-w-xl mx-auto text-center'>
          <h1 className="text-5xl font-bold leading-tight sm:text-6xl text-gray-primary-color mb-4">
            Your Online Journey Starts Here
          </h1>
          <p className="my-5 text-base text-white sm:text-xl">
            Let's Build Something Amazing Together!
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-center items-center">
            <a href='#' title='' className="shadow-2xl mb-4 sm:mb-0 sm:mr-4 inline-flex items-center px-6 py-4 font-semibold text-white bg-primary-color rounded-lg transition-all duration-200 hover:scale-110" role='button'> DownLoad CV</a>
            <Link to='/Portfolio' className="inline-flex items-center px-6 py-4 font-semibold text-white border rounded-lg transition-all duration-200 hover:scale-110" role='button'>
              View Work
            </Link>
          </div>
          <div className="flex justify-center mt-8">
  <a href="https://www.linkedin.com/in/mohammad-sameer-4b0942275" target="_blank" rel="noopener noreferrer" className='transition-all duration-200 hover:scale-110 cursor-pointer'><AiFillLinkedin className="w-[50px] h-auto mr-4" /></a>
  <a href="#" className='transition-all duration-200 hover:scale-110 cursor-pointer'><AiFillInstagram className="w-[50px] h-auto mr-4" /></a>
  <a href="https://github.com/Sameer6386/CodeAlpha" target="_blank" rel="noopener noreferrer" className='transition-all duration-200 hover:scale-110 cursor-pointer'><AiFillGithub className="w-[50px] h-auto" /></a>
</div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
