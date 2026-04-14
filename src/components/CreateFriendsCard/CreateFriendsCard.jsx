import React from 'react';

const CreateFriendsCard = ({ friend }) => {
    const { picture, name, status, tags, days_since_contact } = friend

    return (
        <div>
            <div className='cursor-pointer cardAnimate  bg-white rounded-lg shadow-sm p-6 flex justify-center items-center flex-col'>
                <div >
                    <img className='rounded-full mb-3' src={picture} alt="" />
                </div>
                <div className='flex flex-col items-center justify-center space-y-2'>
                    <div className='text-[#1F2937] font-semibold text-lg'>
                        <h1>{name}</h1>
                    </div>
                    <div className='text-[#64748B] text-[12px]'>
                        <h1>
                            {days_since_contact} 
                            <span className='ml-2'>ago</span>
                        </h1>
                    </div>
                    <div className='font-medium text-[12px] text-center'>
                        <p className='bg-[#CBFADB] text-[#244D3F]  rounded-full py-2 px-3'>
                            {
                                tags.map((tag, i) => <span key={i}>{tag} </span>)
                            }
                        </p>
                    </div>
                    <div
                        className={`text-white font-medium text-[12px] py-2 px-4 rounded-full
                        ${status === 'overdue' ? 'bg-[#EF4444]' :
                                status === 'on-track' ? 'bg-[#244D3F]' :
                                    status === 'almost due' ? 'bg-[#EFAD44]' : ''}`}>
                        <p>{status}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateFriendsCard;