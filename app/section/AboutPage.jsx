import React from 'react';

const AboutPage = () => {
  return (
    <div className='sticky top-0 z-0 bg-gray-200 text-gray-700 px-20 py-40 rounded-[50px]'>
      <div className="flex flex-row gap-10 justify-end ">
        <section className="flex flex-col gap-10 justify-between">
          <p className="text-4xl border-b-2 border-gray-300 pb-10">
            I am a Product designer, specialising in crafting user-friendly, immersive online experiences. I create seamless brand experiences for a global client base.
          </p>
          <div className="flex flex-row justify-between gap-40">
            <h1 className="flex-1 text-lg text-gray-400 font-semibold">About Me</h1>
            <p className='flex-2 text-sm'>With 10 years of experience in the design industry, I have had the opportunity to work with both industry leaders like BrandCorp, Sundo, Prodbunch and more. I have been fortunate to have my work recognised with awards such as a Cannes Lion, D&AD Pencil, CSSDA, FWA and Awwwards.</p>
          </div>
        </section>
        <section className="">
          <div className="w-[400px] h-[500px] bg-red-500"></div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
