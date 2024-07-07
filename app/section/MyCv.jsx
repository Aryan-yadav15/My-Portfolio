import React from 'react';

const MyCv = () => {
  const experience = [
    { title: 'FullStack Developer', company: 'BitsToBugs', year: '2024-Present' },
    { title: 'UI/UX Designer', company: 'BitsToBugs', year: '2022-2023' },
    { title: 'Graphic Design Lead', company: 'Konnexions', year: '2022-Present' }
  ];
  return (
    <div>
      <div className='relative top-0 z-0 bg-gray-200 text-gray-700 px-10 py-20 rounded-[40px]  transition-custom-long'>
        <div className="flex flex-col">
          <section className="pb-20">
            <h1 className='text-8xl font-semibold text-black'>Curriculum Vitae</h1>
          </section>
          <section className="flex flex-row gap-10">
            <section className='border-t flex-1 border-gray-400 py-5'>
              <p className='text-sm text-gray-600'>01.</p>
              <h1 className='font-medium text-gray-950 text-2xl'>Experience</h1>
            </section>
            <section className='flex-2 w-full '>
              {experience.map((exp, index) => (
                <div key={index} className='flex flex-row justify-between py-10 border-t hover:border-gray-800 transition border-gray-400 '>
                  <div>
                    <h1 className='font-medium text-gray-950 text-2xl'>{exp.title}</h1>
                    <p>{exp.company}</p>
                  </div>
                  <div>
                    <p>{exp.year}</p>
                  </div>
                </div>
              ))}
            </section>
          </section>
        </div>
      </div>
    </div>
  );
}

export default MyCv;
