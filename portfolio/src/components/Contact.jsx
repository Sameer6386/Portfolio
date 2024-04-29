import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillCalendar, AiFillContacts } from 'react-icons/ai'

const Contact = () => {
  return (
    <div className='pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-16 md:h-[92vh]'>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 bg-[#223]/30 rounded-3xl">
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto ">
            <h2 className="mb-4 font-bold tracking-tight gray-primary-color text-3xl sm:text-5xl">
              Let´s connect
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-400">
              and start working on amazing things
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="my-auto">
              <ul>
                <li className="flex items-center mb-8">
                  <AiFillLinkedin className='w-[70px] h-auto text-gray-300 mr-5' />
                  <div>
                    <h3 className="text-lg font-bold text-gray-200">LinkedIn</h3>
                    <p className="text-gray-400">@Mohammad_Sameer</p>
                  </div>
                </li>
                <li className="flex items-center mb-8">
                  <AiFillContacts className='w-[70px] h-auto text-gray-300 mr-5' />
                  <div>
                    <h3 className="text-lg font-bold text-gray-200">Contact</h3>
                    <p className="text-gray-400">Mobile: +916386702044</p>
                    <p className="text-gray-400">Gmail: Samir638670@gmail.com</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <AiFillCalendar className='w-[70px] h-auto text-gray-300 mr-5' />
                  <div>
                    <h3 className="text-lg font-bold text-gray-200">Working hours</h3>
                    <p className="text-gray-400">Monday - Friday: 09:00 AM - 04:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="max-w-6xl p-5 md:p-12" id="form">
              <h2 className="mb-4 text-2xl font-bold text-gray-300">Ready to Get Started?</h2>
              <form action="https://getform.io/f/zbqO1Gep" method="POST">
                <div className="mb-6">
                  <input type="text" id="name" autoComplete="given-name" placeholder="Your name" className="mb-4 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4" name="name" />
                  <input type="email" id="email" autoComplete="email" placeholder="Your email address" className="mb-4 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4" name="email" />
                  <textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." className="w-full rounded-md border border-gray-400 py-2 pl-2 pr-4"></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="w-full bg-primary-color text-white px-6 py-3 font-xl rounded-md">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
