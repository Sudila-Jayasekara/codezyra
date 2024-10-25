import React from 'react';
import amico from '../assets/home_page/Programming-amico.svg';
import bro from '../assets/home_page/Programming-bro.svg';
import cuate from '../assets/home_page/Programming-cuate.svg';
import pana from '../assets/home_page/Programming-pana.svg';
import rafiki from '../assets/home_page/Programming-rafiki.svg';

const Container = ({ bgColor, children }) => {
  return (
    <div className={`min-h-screen flex flex-col md:flex-row pl-4 pr-4 md:pl-32 md:pr-32 ${bgColor}`}>
      {children}
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="mt-10 pt-6 max-w-screen-2xl mx-auto">

      <Container bgColor="bg-backgroundLightGray">
        <div className="flex-1 flex justify-center md:justify-start items-end ">
          <h1 className="text-4xl font-bold text-black">About CodeZyra</h1>
        </div>
        <div className="flex-1 flex justify-center items-center ">
          <img src={amico} alt="amico" className="w-full max-w-md md:max-w-lg" />
        </div>
      </Container>

      <Container bgColor="bg-white">
        <div className="flex-1 flex justify-center md:justify-start items-end ">
          <h1 className="text-4xl font-bold text-black">Our Mission</h1>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img src={bro} alt="bro" className="w-full max-w-md md:max-w-lg" />
        </div>
      </Container>

      <Container bgColor="bg-blue-500">
        <div className="flex-1 flex justify-center md:justify-start items-end ">
          <h1 className="text-4xl font-bold text-white">Join Us</h1>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img src={cuate} alt="cuate" className="w-full max-w-md md:max-w-lg" />
        </div>
      </Container>

    </div>
  );
};


export default HomePage;
