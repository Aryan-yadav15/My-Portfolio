import React from 'react'
import { FlipWords } from '../components/FlipWords'
import { LinkPreviewDemo } from '../components/LinkPreviewDeom';
import '../globals.css'


const CurrentWorking = () => {
  const words = ["Learn", "Create", "Inspire", "Build"];

  return (
    <div className='sticky overflow-hidden top-0 z-0 h-[140vh] bg-customDarkGray bg-gradient-to-l from-blue-500/5 via-indigo-500/5 to-purple-500/25 animate-gradient text-gray-500 px-6 lg:px-20 py-20 xlg:py-40'>
      <div className="flex flex-col justify-between">
        <section>
          <h1 className='text-6xl text-center'>I Just love to
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