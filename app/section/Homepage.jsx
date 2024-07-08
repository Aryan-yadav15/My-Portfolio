import React from 'react';
import TimeDisplay from '../components/Clock';
import { clients } from '../lib/icons';
import { InfiniteMovingCards } from '../components/InfiniteScroll';

const Homepage = () => {
  return (
    <div className='sticky top-0 h-screen bg-customDarkGray pt-10 px-10'>
      <div className='flex flex-col h-full justify-center'>
        <div className='border-b border-gray-600 pb-16'>
          <h1 className='text-8xl xlg:text-9xl font-medium'>
            <span className='gold-text'>Visual </span>Designer
          </h1>
          <h1 className='text-8xl xlg:text-9xl font-medium pt-1'>
            <span className='text-8xl xlg:text-9xl text-Secondarytext font-medium mr-5'>&</span>
            Fullstack <span className='gold-text'>Devloper</span>
          </h1>
        </div>
        <div className='py-2 flex flex-row'>
          <div className="flex flex-col flex-2 pr-10 xlg:pr-80 border-r border-gray-600">
            <p className='text-gray-500'>BIO</p>
            <h1 className='text-gray-400'>I partner with premium brands from different disciplines to create visually unique experiences. Located in London, England.</h1>
          </div>
          <div className="flex flex-col flex-1 justify-center items-center">
            <TimeDisplay timezone="Nagpur/India" city='Nagpur' country='India' />
          </div>
        </div>
        <InfiniteMovingCards
          className="md:mt-[4rem] mt-[-100px]"
          items={clients}
          direction='right'
          speed='slow'
        />
      </div>
    </div>
  );
}

export default Homepage;
