import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='h-[100px]  py-2 px-10  xlg:px-20 text-primaryText bg-customDarkGray  flex flex-row sticky top-0 border-b border-gray-600'>
            <div className='flex-2 w-full flex items-center pt-8 '>
                <img src="/logoPortfolio.png" alt="" width={200} />
            </div>
            <div className='flex-1 w-full '></div>
            <div className='flex-2 w-full flex justify-end items-center pt-2'>
                <div className="flex justify-between w-3/4 xlg:w-[44%] text-gray-300 ">
                    <Link href={'/'}>
                        <h1 className='hover:font-semibold transition-all font-regular'>Project</h1>
                    </Link>
                    <Link href={'/'}>
                        <h1 className='hover:font-semibold transition-all font-regular'>About</h1>
                    </Link>
                    <Link href={'/'}>
                        <h1 className='hover:font-semibold transition-all font-regular'>Contact</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar