import React from "react";
import proj1 from '../Assests/proj1.png';
import proj2 from '../Assests/proj2.png';
import proj3 from '../Assests/proj3.png';
import proj4 from '../Assests/proj4.png';
import { AiFillGithub, AiFillChrome } from "react-icons/ai";

const Portfolio = () => {
    return (
        <div className="pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-16 h-[92vh]">
            <div className='px-7 mx-auto grid sm:grid-cols-2 gap-6'>


                <div className="mb-4 flex flex-col sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1 sm:pr-5">
                    <a href="/" className='group h-48 col-span-3 md:h-80'>
                        <img src={proj1} alt='' className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-lg' />
                    </a>
                    <div className='flex flex-col col-span-4 p-4 mx-auto'>
                        <h2 className='text-gray-200 font-bold text-xl leading-10'>
                            Project#1
                        </h2>
                        <p className='text-gray-400'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates tenetur earum maiores animi et recusandae nam ipsam temporibus dolore autem!
                        </p>
                        <div className='flex flex-row justify-between text-white gap-4 mx-auto pb-4'>
                            <AiFillGithub className="w-[55px] h-auto" />
                            <AiFillChrome className="w-[55px] h-auto" />
                        </div>
                    </div>
                </div>

                <div className="mb-4 flex flex-col sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1 sm:pr-5">
                    <a href="/" className='group h-48 col-span-3 md:h-80'>
                        <img src={proj2} alt='' className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-lg' />
                    </a>
                    <div className='flex flex-col col-span-4 p-4 mx-auto'>
                        <h2 className='text-gray-200 font-bold text-xl leading-10'>
                            Project#2
                        </h2>
                        <p className='text-gray-400'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem repellendus minus dignissimos labore, nam incidunt unde laudantium aliquam ratione consectetur.
                        </p>
                        <div className='flex flex-row justify-between text-white gap-4 mx-auto pb-4'>
                            <AiFillGithub className="w-[55px] h-auto" />
                            <AiFillChrome className="w-[55px] h-auto" />
                        </div>
                    </div>
                </div>
                <div className="mb-4 flex flex-col sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1 sm:pr-5">
                    <a href="/" className='group h-48 col-span-3 md:h-80'>
                        <img src={proj3} alt='' className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-lg' />
                    </a>
                    <div className='flex flex-col col-span-4 p-4 mx-auto'>
                        <h2 className='text-gray-200 font-bold text-xl leading-10'>
                            Project#3
                        </h2>
                        <p className='text-gray-400'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem repellendus minus dignissimos labore, nam incidunt unde laudantium aliquam ratione consectetur.
                        </p>
                        <div className='flex flex-row justify-between text-white gap-4 mx-auto pb-4'>
                            <AiFillGithub className="w-[55px] h-auto" />
                            <AiFillChrome className="w-[55px] h-auto" />
                        </div>
                    </div>
                </div>

                <div className="mb-4 flex flex-col sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1 sm:pr-5">
                    <a href="/" className='group h-48 col-span-3 md:h-80'>
                        <img src={proj4} alt='' className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-lg' />
                    </a>
                    <div className='flex flex-col col-span-4 p-4 mx-auto'>
                        <h2 className='text-gray-200 font-bold text-xl leading-10'>
                            Project#4
                        </h2>
                        <p className='text-gray-400'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem repellendus minus dignissimos labore, nam incidunt unde laudantium aliquam ratione consectetur.
                        </p>
                        <div className='flex flex-row justify-between text-white gap-4 mx-auto pb-4'>
                            <AiFillGithub className="w-[55px] h-auto" />
                            <AiFillChrome className="w-[55px] h-auto" />
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Portfolio;
