import React, { useState, useEffect } from "react";

const HomePage = () => {
  const company = "Hello";
  const [displayedText, setDisplayedText] = useState("");

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect( () => {
    const typeText = async () => {
      let index = 0;
      while (index < company.length) {
        setDisplayedText((prev) => prev + company[index]);
        index++;
        await wait(100);
      };
    }
    typeText();
  }, [company]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-800">
      {/* Main Typing Animation */}
      <h1 className="text-4xl font-semibold text-white">
        <p>Welcome to CodeZyra</p>
        <p className="text-xl">{displayedText}</p> {/* Display the typed text */}
        <input 
          type="text" 
          placeholder="Enter your name" 
          className="mb-4 p-2 rounded text-black"
          onChange={(e) => console.log(e.target.value)}
        />
      </h1>
    </div>
  );
};

export default HomePage;
