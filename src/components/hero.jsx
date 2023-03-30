import Image from 'next/image';
import React from 'react';
import heroBg from '../assets/images/heroBackground.png';
import arrowIcon from '../assets/icons/arrow.png';
import phoneIcon from '../assets/icons/contact.png';
import mailIcon from '../assets/icons/mail.png';
import Header from './header';

const Hero = () => {
  return (
    <section
      className="flex flex-col w-full h-screen bg-center bg-cover bg-no-repeat rounded-b-4xl"
      style={{
        backgroundImage: `url(${heroBg.src})`,
      }}
    >
      <Header />
      <div className="w-full h-screen relative ">
        <div className="relative h-screen text-center flex flex-col justify-center items-center">
          <button className="relative bg-orange-600 hover:bg-orange-500 px-2 py-1 rounded-2xl text-white h-8 w-28 font-black text-xs uppercase cursor-pointer">
            Real Estate
          </button>
          <h1 className="font-normal text-7xl text-center mt-40 text-white ">
            Invest on Real Estate with
            <br /> Our Company
          </h1>
          {/* Icons and Text under Heading */}
          <div className="flex mt-24 justify-center items-center">
            <div className="flex mr-11 ">
              <Image
                src={arrowIcon}
                alt="arrow icon"
                className="w-5 h-5 mx-9 self-center"
              />
              <p className="text-white text-xl py-2 ">
                225 S 1st St Brooklyn, NY 11211
              </p>
            </div>

            <div className="flex ml-20 mr-20">
              <Image
                src={phoneIcon}
                alt="phone icon"
                className="w-5 h-5 mx-9 self-center"
              />
              <p className="text-white text-xl py-2">(929) 356-0147</p>
            </div>

            <div className="flex ml-20">
              <Image
                src={mailIcon}
                alt="mail icon"
                className="w-5 h-5 mx-9 self-center"
              />
              <p className="text-white text-xl py-2">hotel@gmail.com</p>
            </div>
          </div>
          {/* Show more button  */}
          <div className="  absolute bottom-8 w-full text-center ">
            <button className=" text-blue-900 text-xl capitalize shadow-lg bg-white hover:bg-orange-500 hover:text-white px-4 py-1 rounded-3xl h-14 w-36">
              show more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
