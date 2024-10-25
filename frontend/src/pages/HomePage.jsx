import React from 'react';
import Container from '../components/Container';
import Comment from 'postcss/lib/comment';
import amico from '../assets/home_page/Programming-amico.svg';
import bro from '../assets/home_page/Programming-bro.svg';
import cuate from '../assets/home_page/Programming-cuate.svg';
import pana from '../assets/home_page/Programming-pana.svg';
import rafiki from '../assets/home_page/Programming-rafiki.svg';



const HomePage = () => {
  return (
    <div className="mt-10 pt-6 max-w-screen-2xl mx-auto">

      <Container bgColor="bg-backgroundLightGray">
        <div className="flex-1 flex justify-around items-end md:items-center">
          <h1 className="text-4xl font-bold text-black">About CodeZyra</h1>
        </div>
        <div className="flex-1 flex justify-around items-end md:items-center">
          <img src={amico} alt="amico" className="w-full max-w-md md:max-w-lg" />
        </div>
      </Container>

      <Container bgColor="bg-blue-500">
        <div className="flex-1 flex justify-around items-end md:items-center ">
          <h1 className="text-4xl font-bold text-white">Join Us</h1>
        </div>
        <div className="flex-1 flex justify-around items-end md:items-center">
          <img src={bro} alt="bro" className="w-full max-w-md md:max-w-lg" />
        </div>
      </Container>
      <Container bgColor="bg-backgroundLightGray">
  <div className="flex-1 flex flex-col  justify-around items-center">
    <h1 className="text-4xl font-bold text-black">Our Packages</h1>

    <div className="w-full flex flex-col space-y-10 px-6 py-6 md:flex-row md:space-y-0 md:space-x-10 md:justify-around">
      <div className="w-full flex justify-center p-8  md:w-1/3 h-96 rounded-lg shadow-lg bg-white ">
      <h1 className='text-2xl font-bold'>Package 1</h1>
      </div>
      <div className="w-full flex justify-center p-8  md:w-1/3 h-96 rounded-lg shadow-lg bg-white ">
      <h1 className='text-2xl font-bold'>Package 2</h1>
      </div>
      <div className="w-full flex justify-center p-8  md:w-1/3 h-96 rounded-lg shadow-lg bg-white ">
      <h1 className='text-2xl font-bold'>Package 3</h1>
      </div>
    </div>
  </div>
</Container>


      <Container bgColor="bg-white">
        <div className="flex-1 flex justify-around items-end md:items-center">
          <h1 className="text-4xl font-bold text-black">Contact Us</h1>
        </div>
        <div className="flex-1 flex justify-around items-end md:items-center">
          <img src={cuate} alt="amico" className="w-full max-w-md md:max-w-lg" />
        </div>
      </Container>
    </div>
  );
};


export default HomePage;
