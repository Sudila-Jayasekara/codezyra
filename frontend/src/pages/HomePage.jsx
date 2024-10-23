import React from 'react';
import TypingText from '../components/reuse/TypingText';

const HomePage = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center bg-gray-800'>
      <h1 className='text-3xl font-semibold text-white'>
        <TypingText message="This is test"/>
      </h1>
    </div>
  );
};

export default HomePage;
