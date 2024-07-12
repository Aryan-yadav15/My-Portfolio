import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Contact = () => {
    return (
        <div className=" bg-slate-50   top-0 ">
            <div className=' h-[100vh] text-gray-700  bg-slate-50 px-20 py-20 xlg:py-40 relative flex flex-col rounded-[30px] '>
                <div className="flex flex-col justify-between">
                    <section className='absolute left-[10VW] top-[20vh] w-[80vw] h-[50vh] flex flex-col justify-center items-center'>
                        <h1 className='text-gray-300 lg:text-gray-200 2xlg:text-[50rem] lg:text-[30rem] text-[12rem] leading-[0.1rem]'>hola</h1>
                    </section>
                    <Link href='/contact'>
                        <section className='absolute top-[41vh] left-16 lg:left-[25vw]'>
                            <div className="relative">
                                <div className="w-[17rem] lg:w-[40rem] h-[5rem] lg:h-[10rem] bg-white opacity-80 hover:opacity-100 border shadow-lg rounded-full flex justify-center items-center transition-transform duration-300 ease-in-out transform hover:scale-110 ">
                                    <h1 className='font-bold opacity-70 hover:text-black transition-all duration-500 text-5xl lg:text-8xl'>Say Hi</h1>
                                </div>
                            </div>
                        </section>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;
