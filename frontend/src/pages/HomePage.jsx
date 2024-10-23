import React from 'react';
import TypingText from '../components/TypingText';

const HomePage = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center bg-gray-800'>
      <h1 className='text-3xl font-semibold text-white'>
        <TypingText message="Hello"/>
      </h1>
    </div>
  );
};

export default HomePage;
