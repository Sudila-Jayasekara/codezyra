import React from "react";
import { ReactTyped } from "react-typed";


const HomePage = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-gray-800'>
      <h1 className='text-4xl font-semibold text-orange'>
        <ReactTyped
          strings={["www.codezyra.com", "Welcome to codezyra"]}
          typeSpeed={100}
          backSpeed={50}
          backDelay={1000}
          showCursor={true}
          loop={false}
        />
      </h1>
    </div>
  );
};

export default HomePage;
