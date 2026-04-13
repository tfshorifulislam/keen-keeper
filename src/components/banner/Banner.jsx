import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col'>
            <h1 className='font-bold text-2xl md:text-5xl text-center text-[#1F2937] mt-10 md:mt-20'>
                Friends to keep close in your life
            </h1>
            <p className='text-center text-[#64748B] mt-2 md:mt-4 mb-5 md:mb-8'>
                Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                relationships that matter most.
            </p>
            <div className='flex justify-center'>
                <button className='btn border-none shadow-none py-3 px-4 font-semibold text-white bg-[#244D3F] rounded-sm'>
                    Add a Friend
                </button>
            </div>
        </div>
    );
};

export default Banner;