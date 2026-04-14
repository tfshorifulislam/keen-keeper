import React from 'react';

const FriendDetailsLayout = ({ expectedFriendDetails }) => {
    const { picture, name, bio, status, email, tags } = expectedFriendDetails;
    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-5 gap-6 mt-10 md:mt-20'>
                <div className='col-span-2 flex flex-col justify-center space-y-3 py-6 px-2'>
                    <div>
                        <img className='rounded-full' src={picture} alt={name} />
                    </div>
                    <div className='space-y-2'>
                        <h1
                            className='font-semibold text-xl text-[#1F2937]'>
                            {name}
                        </h1>
                        <p

                            className={`text-white font-medium text-[12px] py-2 px-4 rounded-full
                        ${status === 'overdue' ? 'bg-[#EF4444]' :
                                    status === 'on-track' ? 'bg-[#244D3F]' :
                                        status === 'almost due' ? 'bg-[#EFAD44]' : ''}`}>
                            {status}
                        </p>
                        <div className='font-medium text-[12px] text-center'>
                            <p className='bg-[#CBFADB] text-[#244D3F]  rounded-full py-2 px-3'>
                                {
                                    tags.map((tag, i) => <span key={i}>{tag} </span>)
                                }
                            </p>
                        </div>
                    </div>
                    <p className='text-[#64748B] font-medium'>{bio}</p>
                    <p className='text-[#64748B] text-sm'>Preferred:{email}</p>
                </div>
            </div>
        </div>
    );
};

export default FriendDetailsLayout;