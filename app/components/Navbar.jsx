"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import '../globals.css'

const Navbar = () => {
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    let lastScrollY = 0
    const updateNavbar = () => {
      if (scrollY.current > lastScrollY) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      lastScrollY = scrollY.current
    }

    return scrollY.onChange(updateNavbar)
  }, [scrollY])

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: hidden ? '-100px' : '0px' }}
      transition={{ duration: 0.3 }}
      className='navbar h-[70px] py-2 px-10 xlg:px-20 text-primaryText flex flex-row sticky top-0 border-b border-gray-600 z-50'
    >
      <div className='flex-2 w-full flex items-end pt-8'>
        <img src="/logoPortfolio.png" alt="Logo" width={200} className='' />
      </div>
      <div className='flex-1 w-full'></div>
      <div className='flex-2 w-full justify-end items-center pt-2 hidden lg:flex'>
        <div className="flex justify-between w-3/4 xlg:w-[44%] text-gray-300">
          <Link href='/' className='hover:font-semibold transition-all font-regular '>
            Project
          </Link>
          <Link href='/' className='hover:font-semibold transition-all font-regular'>
            About
          </Link>
          <Link href='/' className='hover:font-semibold transition-all font-regular'>
            Contact
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar
