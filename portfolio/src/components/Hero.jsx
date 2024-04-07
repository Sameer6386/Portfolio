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
            I will solve the your Frontend
          </h1>
          <p className="my-5 text-base text-white sm:text-xl">
            Don't Hesitate to Ask Me!
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
            <div class="relative bottom-0 z-10 flex mx-auto justify-center">
              <img class="left-[-20px] top-[-20px] sm:left-20  sm:top-[-200px] absolute block w-auto h-[150px]"src={notebookL} alt="" />
              <img class="absolute sm:relative w-auto bottom-[-110px] right-[-70px] sm:bottom-0 sm:right-0 h-[500px]" src={notebookM} alt=""/>
              <img class='right-0 sm:bottom-0 absolute block h-auto w-[800px] sm:w-[900px]' src={profilepic} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
