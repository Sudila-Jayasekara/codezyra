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
    <div>
    </div>
  );
};

export default HomePage;
