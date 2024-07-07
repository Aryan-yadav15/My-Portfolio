import React from 'react'
import { FlipWords } from '../components/FlipWords'
import { LinkPreviewDemo } from '../components/LinkPreviewDeom';

const CurrentWorking = () => {
  const words = ["Learn", "Create", "Inspire", "Build"];

  return (
    <div className='sticky top-0 z-0 h-[110vh] bg-customDarkGray text-gray-700 px-20 py-20 xlg:py-40'>
      <div className="flex flex-col justify-between">
        <section>
          <h1 className='text-7xl text-center'>I Just love to
            <FlipWords words={words} />
            every day.
          </h1>
        </section>
        <section>
          <LinkPreviewDemo />
        </section>
      </div>
    </div>
  )
}

export default CurrentWorking