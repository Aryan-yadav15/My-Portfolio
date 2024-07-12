import React from 'react';

const MyCv = () => {
  const experience = [
    { title: 'FullStack Developer', company: 'BitsToBugs', year: '2024-Present' },
    { title: 'UI/UX Designer', company: 'BitsToBugs', year: '2022-2023' },
    { title: 'Graphic Design Lead', company: 'Konnexions', year: '2022-Present' }
  ];

  const Learnings = [
    { title: 'B.Tech Degree', company: 'KIIT University', year: '2024-Present' },
    { title: 'FullStack Developer', company: 'Independent Learner', year: '2024-Present' },
    { title: 'Web3 Developer', company: '100X Dev Bootcamp', year: '2024-Present' },
    { title: 'Visual Developer', company: 'BitsToBugs', year: '2024-Present' },
  ]

  return (
    <div className='relative top-0 z-0 bg-gray-200 text-gray-500 px-4 sm:px-10 lg:px-20 py-10 sm:py-20 rounded-[40px] transition-custom-long'>
      <div className="flex flex-col">
        <section className="pb-10 sm:pb-20">
          <h1 className='text-2xl sm:text-4xl lg:text-8xl font-semibold text-black'>Curriculum Vitae</h1>
        </section>
        <section className="flex flex-col sm:flex-row gap-4 sm:gap-10">
          <section className='sm:w-1/3'>
            <div className='sticky top-5 border-t border-gray-400 pt-5'>
              <p className='text-sm text-gray-600'>01.</p>
              <h1 className='font-medium text-gray-950 text-5xl '>Experience</h1>
            </div>
          </section>
          <section className='sm:w-2/3'>
            {experience.map((exp, index) => (
              <div key={index} className='flex flex-row justify-between py-6 sm:py-10 border-t hover:border-gray-800 transition border-gray-400'>
                <div className="mb-2 sm:mb-0">
                  <h1 className='font-medium text-gray-950 text-xl sm:text-2xl'>{exp.title}</h1>
                  <p>{exp.company}</p>
                </div>
                <div>
                  <p className='text-sm'>{exp.year}</p>
                </div>
              </div>
            ))}
          </section>
        </section>
        <section className="flex flex-col sm:flex-row gap-4 sm:gap-10 mt-6 sm:mt-10">
          <section className='sm:w-1/3'>
            <div className='sticky top-5 border-t border-gray-400 pt-5'>
              <p className='text-sm text-gray-600'>02.</p>
              <h1 className='font-medium text-gray-950 lgtext-xl text-5xl'>Learnings</h1>
            </div>
          </section>
          <section className='sm:w-2/3'>
            {Learnings.map((learning, index) => (
              <div key={index} className='flex flex-col sm:flex-row justify-between py-6 sm:py-10 border-t hover:border-gray-800 transition border-gray-400'>
                <div className="mb-2 sm:mb-0">
                  <h1 className='font-medium text-gray-950 text-xl sm:text-2xl'>{learning.title}</h1>
                  <p>{learning.description}</p>
                </div>
                <div>
                  <p className='text-sm'>{learning.year}</p>
                </div>
              </div>
            ))}
          </section>
        </section>
      </div>
    </div>

  );
}

export default MyCv;
