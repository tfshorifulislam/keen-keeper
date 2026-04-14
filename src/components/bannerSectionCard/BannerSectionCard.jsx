import React from 'react';
import useFetchFriendsData from '../../useFetchFriendsData/UseFetchFriendsData';

const BannerSectionCard = () => {
    const { friendsData } = useFetchFriendsData()
    return (
        <div className='mx-auto w-11/12'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mt-10 mb:mt-20 '>
                <div className='text-center py-8 px-3 bg-white shadow-lg'>
                    <p className='text-[#244D3F] mb-2 font-semibold text-3xl'>{friendsData.length}</p>
                    <p className='text-[#64748B] text-lg'>Total Friends</p>
                </div>
                <div className='text-center py-8 px-3 bg-white shadow-lg'>
                    <p className='text-[#244D3F] mb-2 font-semibold text-3xl'>{friendsData.filter(f => f.status === 'on-track').length}</p>
                    <p className='text-[#64748B] text-lg'>On Track</p>
                </div>
                <div className='text-center py-8 px-3 bg-white shadow-lg'>
                    <p className='text-[#244D3F] mb-2 font-semibold text-3xl'>6</p>
                    <p className='text-[#64748B] text-lg'>Need Attention</p>
                </div>
                <div className='text-center py-8 px-3 bg-white shadow-lg'>
                    <p className='text-[#244D3F] mb-2 font-semibold text-3xl'>{friendsData.filter(f => f.days_since_contact <= 30).length}</p>
                    <p className='text-[#64748B] text-lg'>Interactions This Month</p>
                </div>
            </div>
            <div className='border-t border-[#E9E9E9] my-10'></div>
        </div>
    );
};

export default BannerSectionCard;