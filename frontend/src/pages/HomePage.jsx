import React, { useState, useEffect } from 'react';
import TypingText from '../components/reuse/TypingText';

const HomePage = () => {
  const [showNextMessage, setShowNextMessage] = useState(false);

  useEffect(() => {
    // Delay the display of the second message
    const timer = setTimeout(() => {
      setShowNextMessage(true);
    }, 3000); // Adjust this duration as needed (3000 ms = 3 seconds)

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-gray-800'>
      <h1 className='text-3xl font-semibold text-white'>
        <TypingText message="www.codezyra.com" />
      </h1>
      {showNextMessage && (
        <p className='text-xl font-semibold text-white mt-4'>
          <TypingText message="Hi Dhanuthi" />
        </p>
      )}
    </div>
  );
};

export default HomePage;
