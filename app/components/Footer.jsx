import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='h-[35vh] relative bg-slate-50 z-40 px-10 mt-[-20rem] lg:mt-[-5rem] shadow-2xl'>
            <div className="bg-white h-full rounded-3xl p-10">
                <div className="flex flex-col lg:flex-row justify-between">
                    <section className="flex-1 flex flex-col gap-5 border-b border-gray-300">
                        <div>
                            <h1 className='text-4xl lg:text-6xl px-2 text-gray-500'>aryan yadav</h1>
                        </div>
                        <div className="px-4 py-2 text-gray-400">
                            <h1>FULLSTACK DEVELOPER &<br />VISUAL DESIGNER</h1>
                        </div>
                    </section>
                    <section className="flex-1 flex flex-col items-end">
                        <div>
                            <h1 className='lg:text-2xl text-lg text-gray-400'>aryanyadav.devop@gmail.com</h1>
                        </div>
                        <div className='flex flex-row gap-10 pt-10 opacity-60'>
                            <Link href={'/'}>
                                <Image src='/icons/instagram.svg' width={35} height={35} alt='Instagram' className='hover:shadow-2xl' />
                            </Link>
                            <Link href={'/'}>
                                <Image src='/icons/github.svg' width={35} height={35} alt='GitHub' />
                            </Link>
                            <Link href={'/'}>
                                <Image src='/icons/x.svg' width={35} height={35} alt='Twitter' />
                            </Link>
                            <Link href={'/'}>
                                <Image src='/icons/linkedin.svg' width={35} height={35} alt='LinkedIn' />
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </div>

    )
}

export default Footer