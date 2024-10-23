// import React, { useEffect, useState } from 'react';

// const TypingText = ({ message }) => {
//   const [text, setText] = useState('');
//   const speed = 100;

//   useEffect(() => {
//     let index = 0;
//     let frameId;

//     const type = () => {
//       if (index < message.length) {
//         setText((prev) => prev + message.charAt(index));
//         index++;
//         frameId = requestAnimationFrame(() => setTimeout(type, speed));
//       }
//     };

//     type();

//     return () => cancelAnimationFrame(frameId);
//   }, [message]);

//   return <span>{text}</span>;
// };

// export default TypingText;

import React, { useEffect, useState } from 'react';

const TypingText = ({ message }) => {
  const [text, setText] = useState('');
  const speed = 100;

  useEffect(() => {
    let index = 0;
    let frameId;

    const type = () => {
      if (index < message.length) {
        setText((prev) => prev + message.charAt(index));
        index++;
        frameId = requestAnimationFrame(() => setTimeout(type, speed));
      }
    };

    type();

    return () => cancelAnimationFrame(frameId);
  }, [message]);

  return <span>{text}</span>;
};

export default TypingText;
