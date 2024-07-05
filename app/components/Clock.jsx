"use client";

import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';

const TimeDisplay = ({ timezone, city, country }) => {
    const [time, setTime] = useState('');
    const [isAfterSix, setIsAfterSix] = useState(false);
    const [period, setPeriod] = useState('AM');

    useEffect(() => {
        const updateTime = () => {
            const currentTime = moment().tz(timezone).format('hh:mm ');
            setTime(currentTime);

            const currentHour = moment().tz(timezone).hour();
            const currentPeriod = moment().tz(timezone).format('A');
            setPeriod(currentPeriod);
            setIsAfterSix(currentHour >= 18);
        };

        updateTime();
        const interval = setInterval(updateTime, 10000);

        return () => clearInterval(interval);
    }, [timezone]);

    return (
        <div className='flex flex-row gap-10 relative pl-10'>
            {/* Parent container is relative */}
            <div className={`absolute top-0 left-2 h-4 w-4 rounded-full animate-ping ${isAfterSix ? 'bg-red-700' : 'bg-green-600'}`}></div>
            <div className={`absolute top-0 left-2 h-4 w-4 rounded-full ${isAfterSix ? 'bg-red-700' : 'bg-green-600'}`}></div>

            <div className='flex flex-row gap-2'>
                <p className='text-6xl font-thin'>{time}</p>
                <p className='text-lg font-thin'>{period}</p>
            </div>

            <div className='flex flex-row justify-center items-center gap-2'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin"
                >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>

                <div>
                    <h1 className='text-gray-400'>{city},</h1>
                    <h1>{country}</h1>
                </div>
            </div>
        </div>
    );
};

export default TimeDisplay;
