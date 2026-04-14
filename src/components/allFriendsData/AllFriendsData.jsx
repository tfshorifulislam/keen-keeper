import React from 'react';
import useFetchFriendsData from '../../useFetchFriendsData/UseFetchFriendsData';
import CreateFriendsCard from '../CreateFriendsCard/CreateFriendsCard';

const AllFriendsData = () => {
    const { friendsData, loading } = useFetchFriendsData()
    return (
        <div className='w-11/12 mx-auto'>
            <p className='font-semibold text-2xl text-[#1F2937] mb-4'>
                Your Friends
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {
                    friendsData.map((friend, i) => <CreateFriendsCard key={i} friend={friend} />)
                }
            </div>
        </div>
    );
};

export default AllFriendsData;