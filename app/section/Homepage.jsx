import React from 'react';
import TimeDisplay from '../components/Clock';
import { clients } from '../lib/icons';
import { InfiniteMovingCards } from '../components/InfiniteScroll';

const Homepage = () => {
  return (
    <div className='sticky top-0 h-screen bg-customDarkGray lg:pt-10 px-4 sm:px-10'>
      <div className='flex flex-col h-full justify-center'>
        <div className='border-b border-gray-600 pb-8 md:pb-16'>
          <h1 className='text-6xl sm:text-4xl md:text-8xl font-medium'>
            <span className='gold-text'>Visual </span>Designer
          </h1>
          <h1 className='text-6xl sm:text-4xl md:text-8xl font-medium pt-1'>
            <span className='text-6xl sm:text-84xl md:text-6xl text-Secondarytext font-medium mr-5'>&</span><br  className='lg:hidden'/>
            Fullstack <span className='gold-text'>Developer</span>
          </h1>
        </div>
        <div className='py-2 flex flex-col md:flex-row'>
          <div className="flex flex-col flex-2 pr-0 pb-5 md:pr-10 lg:pr-20 lg:border-r border-b lg:border-b-0 border-gray-600  md:border-r-gray-600">
            <p className='text-gray-500'>BIO</p>
            <h1 className='text-gray-400'>I partner with tech brands from different disciplines to create visually unique experiences. Located in Nagpur, India.</h1>
          </div>
          <div className="flex flex-col flex-1 justify-center items-center mt-12 md:mt-0  ">
            <TimeDisplay timezone="Asia/Kolkata" city='Nagpur' country='India' />
          </div>
        </div>
        <InfiniteMovingCards
          className="mt-4 md:mt-10"
          items={clients}
          direction='right'
          speed='slow'
        />
      </div>
    </div>
  );
}

export default Homepage;
