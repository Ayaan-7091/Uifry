import React from 'react';
import FaqCard from '../components/faq_card';

export default function FAQ({ darkMode }) {
  return (
    <div className={darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}>
      <div className="p-4 md:p-20 pt-12 md:pt-0">
        <div className="header">
          <p className="text-customRed font-semibold">FAQ</p>
          <h1 className="text-2xl md:text-5xl font-bold">
            Frequently Asked <br /> Questions
          </h1>
        </div>
        <div className="cards md:grid md:grid-cols-2">
          <div className="left-side md:col-span-1">
            <FaqCard text={darkMode ? 'black' : 'white'} bg={ '#ff5555'} darkMode={darkMode} />
            <FaqCard text={darkMode ? 'white' : 'black'} sub_text={darkMode ? 'opacity-60' : 'opacity-40'} darkMode={darkMode} bg={darkMode ? '#282828':'#ffffff'} />
            <FaqCard text={darkMode ? 'black' : 'white'} bg={'#ff5555'} darkMode={darkMode} />
          </div>
          <div className="right-side md:col-span-1 ml-3">
            <FaqCard sub_text={darkMode ? 'opacity-60' : 'opacity-40'} bg={darkMode ? '#282828':'#ffffff'} darkMode={darkMode} />
            <FaqCard text={darkMode ? 'black' : 'white'} bg={'#ff5555'}  darkMode={darkMode} />
            <FaqCard sub_text={darkMode ? 'opacity-60' : 'opacity-40'} bg={darkMode ? '#282828':'#ffffff'} darkMode={darkMode} />
          </div>
        </div>
      </div>
    </div>
  );
}
