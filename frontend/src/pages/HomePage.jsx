import React from 'react';
import user from '../assets/user.png';
const HomePage = () => {
  return (
    <div className='mt-16 pt-6 max-w-screen-2xl mx-auto'>

      <div className='h-screen flex flex-col md:flex-row pl-4 pr-4 md:pl-32 md:pr-32'>
          <img src={user} alt='User' className='w-40 h-40 object-cover' />
      </div>
      
      <div className='h-screen pl-4 pr-4 md:pl-32 md:pr-32 bg-white'>
        <div>
          2nd container

        </div>
      </div>
      <div className='h-screen pl-4 pr-4 md:pl-32 md:pr-32'>
        <div>
          3rd container
        </div>
      </div>
    </div>
  )
};

export default HomePage;
