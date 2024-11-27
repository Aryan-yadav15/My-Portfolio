'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { CardBody, CardContainer } from '../components/HoverCard';
import Image from 'next/image';
import Link from 'next/link';

const Testimonial = () => {
  const testimonials = [
    { id: 1, name: 'Lakshit Verma',company:'BitsToBugs', image: '/Mockup/pr1.1-1.png', quote: 'Aryan is incredibly punctual and has exceptional work ethics. Always reliable and dedicated, he consistently delivers quality work on time. ' },
    { id: 2, name: 'ZORA',company:"zebiops", image: '/Mockup/pr2.1.png', quote: 'Aryan Yadavs work is truly commendable. His dedication, professionalism, and attention to detail make him a reliable and valuable asset to any project' },
    { id: 3, name: 'Karan Yadav',company:"sda", image: '/Mockup/pr3.1.png', quote: 'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  const variants = {
    enter: { opacity: 0, x: direction > 0 ? 100 : -100, scale: 0.4 },
    center: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: direction < 0 ? 100 : -100, scale: 0.4 }
  };

  return (
    <div className="sticky h-screen lg:h-[150vh] xlg:h-[100vh] top-0 z-0 bg-customDarkGray text-gray-700 px-20 py-20 lg:py-2 xlg:px-20 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/25 animate-gradient lg:flex flex-col items-center xlg:justify-center justify-start">
      <button onClick={handlePrev} className="absolute left-20 p-2 text-white rounded-full metallic-button hover:bg-gray-800 transform -translate-y-1/2 top-[90vh] lg:top-[60vh]">
        <ChevronLeft />
      </button>
      <div className="relative">
        <CardContainer className="inter-var transition-width duration-500 ease-in-out flex items-center justify-center">
          <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-[300px] lg:w-[900px] h-[500px] lg:h-[400px] rounded-xl transition-all duration-500 ease-in-out bg-gray-800 text-white p-8 flex flex-col items-center justify-center metallic-card">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentTestimonial.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="text-center mb-4 absolute"
              >
                <div className="px-4 lg:px-20 flex flex-col gap-20">
                  <p className="text-xl lg:text-3xl text-start text-gray-300 w-full lg:w-3/4 font-medium">{currentTestimonial.quote}</p>
                  <div className="flex flex-col">
                    <h2 className="mt-4 text-xl font-semibold text-end gold-text">{currentTestimonial.name}</h2>
                    <Link href='/' className="text-md font-medium text-end opacity-40 leading-[0.1rem] flex items-center justify-end">
                      {currentTestimonial.company}
                      <ArrowUpRight className="ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </CardBody>
        </CardContainer>
        <AnimatePresence>
          <motion.div
            key={currentTestimonial.id} // Ensure key is unique to force re-rendering of Image
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 360 }}
            exit={{ rotateY: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-0 left-[-50px] mt-4"
          >
            <Image
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              width={150}
              height={150}
              className="rounded-full border-4  border-gray-700"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <button onClick={handleNext} className="absolute right-20 p-2 metallic-button text-white rounded-full hover:bg-gray-800 transform -translate-y-1/2 top-[90vh] lg:top-[60vh]">
        <ChevronRight />
      </button>
    </div>
  );
};

export default Testimonial;
