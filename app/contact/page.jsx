'use client'
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import Footer from '../components/Footer';
import Link from 'next/link';

const Contact = () => {
    const [formData, setFormData] = useState({
        message: '',
        email: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.message) newErrors.message = 'Message is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            emailjs.send(
                'service_o6vv3bq',
                'template_4gqbot5',
                formData,
                'uXWBgZT1nRdMB3EwV'
            ).then(() => {
                alert('Message sent successfully');
                setFormData({ message: '', email: '' });
            }).catch(() => {
                alert('Failed to send message');
            });
        }
    };

    return (
        <div className='bg-slate-5 flex flex-col justify-center items-center pb-10'>
            <div className="w-[90vw] flex justify-center items-center pt-10 pb-3 border-b-2 border-slate-100">
                <Link href={'/'}>
                    <Image
                        src='/logoPortfolio.png'
                        className='brightness-0 opacity-40'
                        width={250}
                        height={250}
                    />
                </Link>
            </div>
            <form onSubmit={handleSubmit} >
                <div className="flex flex-col justify-center items-center lg:flex-row lg:w-[90vw] pt-5 ">
                    <div className="w-[30%] flex lg:h-screen justify-end items-start">
                        <div className="w-40 lg:h-40 h-32 mb-4 rounded-full overflow-hidden">
                            <Image
                                src='/me.jpg'
                                width={200}
                                height={200}
                                className='object-cover'
                            />
                        </div>
                    </div>
                    <div className="lg:w-[70%] pl-10 pr-10 pt-2 flex flex-col gap-10">
                        <div className="flex flex-col justify-center items-start">
                            <div className="flex flex-col gap-2">
                                <h1 className='text-5xl font-semibold text-black'>Say hi!</h1>
                                <h1 className='text-xl text-gray-600'>Always open to new ideas.</h1>
                            </div>
                        </div>
                        <div className="lg:w-[60%] w-full">
                            <h1 className='text-xl font-semibold text-gray-500'>Message</h1>
                            <label htmlFor='message' className='block text-gray-400'>Introduce yourself and share as much you can</label>
                            <textarea
                                id='message'
                                name='message'
                                style={{ height: '200px' }} // Set height here
                                onChange={handleChange}
                                value={formData.message}
                                className='w-full p-2 border rounded-xl mt-1'
                                placeholder='Write your message'
                            />
                            {errors.message && (
                                <div className='text-red-500 text-sm'>{errors.message}</div>
                            )}
                        </div>
                        <div className="w-[60%]">
                            <h1 className='text-xl font-semibold text-gray-500'>Email address</h1>
                            <label htmlFor='message' className='block text-gray-400'>Where you'll receive the reply</label>
                            <textarea
                                id='email'
                                name='email'
                                onChange={handleChange}
                                value={formData.email}
                                className='w-full p-2 border rounded-xl mt-1'
                                placeholder='abc@gmail.com'
                            />
                            {errors.email && (
                                <div className='text-red-500 text-sm'>{errors.email}</div>
                            )}
                        </div>
                            <div className="w-full lg:w-[60%]">
                                <button type='submit' className='bg-black w-full h-16 text-2xl text-white rounded-full p-2'>Send message</button>
                            </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Contact;
