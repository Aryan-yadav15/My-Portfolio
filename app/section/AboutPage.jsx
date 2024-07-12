'use client'

import React, { useEffect } from 'react';
import Image from 'next/image';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {

  const [ref, inView] = useInView({
    triggerOnce: false, // Only trigger once
    threshold: 0.4, // Trigger when 10% of the element is visible
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, type: 'spring', stiffness: 110 },
      });
    }
  }, [controls, inView]);


  return (
    <div className='sticky lg:h-[120vh] top-0 lg:top-0 h-screen z-0 bg-gray-200 text-gray-700 px-4 sm:px-10 lg:px-20 py-8 sm:py-12 lg:py-16 lg:rounded-[50px]'>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 justify-end xlg:h-full">
        <section className="flex flex-col gap-4 sm:gap-2 justify-evenly">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100 }} // Start from the left (-100px)
            animate={controls}
            className="text-xl sm:text-4xl border-b-2 border-gray-300 pb-4 sm:pb-10"
          >
            <p>
              Hi! I'm a Full-Stack Developer and Designer, blending design and development to create seamless and engaging user experiences.
            </p>
          </motion.div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-20">
            <h1 className="text-lg sm:text-xl text-gray-400 font-semibold">About Me</h1>

            <div className='w-full sm:w-[70%]'>
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 100, y: 0 }}
                transition={{ duration: 0.5, delay: 1, type: 'spring', stiffness: 110 }}
              >
                <p className='text-sm sm:text-base'>
                  Back in 2022, I decided to try my hand at creating custom UI components and fell head first into the rabbit hole of coding and web development. Fast-forward to today, and I've had the privilege of building software for an <strong>advertising agency, a start-up and for myself</strong>.
                </p>
                <p className='text-sm sm:text-base mt-2'>
                  I most enjoy building software in the sweet spot where <strong>design and engineering meet — things that look good but are also built well under the hood.</strong> If I'm not coding, I'm probably binge-watching YouTube, watching movies, or obsessing over mechanical keyboards.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="mt-4 sm:mt-0 xlg:mt-40">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 100, y: 0 }}
            transition={{ duration: 0.5, delay: 1, type: 'spring', stiffness: 110 }}
          >
            <div className="w-full sm:w-[400px] h-[400px] sm:h-[500px] rounded-lg overflow-hidden">
              <Image
                className='object-cover rounded-lg'
                src='/me.jpg'
                alt='me'
                width={400}
                height={500}
              />
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default AboutSection;
