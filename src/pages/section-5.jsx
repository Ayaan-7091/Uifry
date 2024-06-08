import React from 'react';
import img from '../assets/testin.png';
import avatar from '../assets/avatar.png';
import avatar2 from '../assets/avatar_2.webp';
import avatar3 from '../assets/avatar_3.png';

export default function Section5({ darkMode }) {
  return (
    <div className={darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}>
      <div className="flex justify-center pt-20 md:pt-0">
        <div className="header flex flex-col items-center text-center">
          <p className="mb-2 font-medium">TESTIMONIAL</p>
          <h1 className="text-2xl md:text-6xl font-semibold">
            What Our Users <br /> Say About Us?
          </h1>
        </div>
      </div>

      <div className="md:grid md:grid-cols-2">
        <div className="col-span-1">
          <img src={img} alt="Testimonial" />
        </div>

        <div className="right-side col-span-1 md:mr-40 content-center text-center pl-10 md:pl-0 md:text-start">
          <div className="pr-12">
            <h2 className="mt-12 mb-10 font-semibold text-md md:text-4xl">
              The Best Financial Accounting App Ever!
            </h2>
            <p className={`text-md md:text-xl text-xs font-medium ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
              “Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.”
            </p>

            <div className="users mt-8 flex ml-20 md:ml-0">
              <img src={avatar} className="h-10 w-10 mb-4" alt="User Avatar" />
              <img src={avatar2} className="h-8 w-8 mt-1 ml-1 opacity-50" alt="User Avatar" />
              <img src={avatar3} className="h-8 w-8 mt-1 ml-1 opacity-50" alt="User Avatar" />
            </div>
            <p className="font-black">Nick Jonas</p>
          </div>
        </div>
      </div>
    </div>
  );
}
