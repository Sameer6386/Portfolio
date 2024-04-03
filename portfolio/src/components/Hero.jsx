import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import profilepic from '../Assests/profilepicB.png';
import notebookL from '../Assests/notebookL.png';
import notebookM from '../Assests/notebookM.png';

const Hero = () => {
  return (
    <div className='relative pt-16 pb-100 sm:pb-16 overflow-hidden h-[92vh]'>
      <div className="px-4 mx-auto max-w-7xl sm:px-8 relative z-20">
        <div className='max-w-xl mx-auto text-center'>
          <h1 className="text-4xl font-bold sm:text-6xl text-gray-primary-color">
            I will Help You My Love
          </h1>
          <p className="my-5 text-base text-white sm:text-xl">
            What Do You Need Me For? Don't Hesitate Ask Me!
          </p>
          <div>
            <a href='#' title='' className="shadow-2xl mr-4 inline-flex items-center px-6 py-4 mt-8 font-semibold text-white bg-primary-color round-lg transition-all duration-200 hover:scale-110" role='button'> DownLoad CV</a>
            <a href='#' title='' className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white border rounded-lg transition-all duration-200 hover:scale-110" role='button'>
              View Work
            </a>
            <div className="flex flex-row justify-between text-white p-8 max-w-[500px] mx-auto">
              <a href="#" className='transition-all duration-200 hover:scale-110 cursor-pointer'><AiFillLinkedin className="w-[70px] h-auto" /></a>
              <a href="#" className='transition-all duration-200 hover:scale-110 cursor-pointer'><AiFillInstagram className="w-[70px] h-auto" /></a>
              <a href="#" className='transition-all duration-200 hover:scale-110 cursor-pointer'><AiFillGithub className="w-[70px] h-auto" /></a>
            </div>
            <div className="relative bottom-0 z-10 flex mx-auto justify-center">
            <img className="left-[20px] top-[-20px] sm:left-20 sm:top-[-200px] absolute block w-auto h-[150px] sm:h-[500px]" src={notebookL} alt="" />


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
