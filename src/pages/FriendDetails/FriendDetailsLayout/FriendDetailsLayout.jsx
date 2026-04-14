import React from 'react';

const FriendDetailsLayout = ({ expectedFriendDetails }) => {
    const { picture, name, bio, status, email, tags, days_since_contact, goal, next_due_date } = expectedFriendDetails;
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-5 grid-rows-1 md:grid-rows-7 gap-6 mt-10 md:mt-20'>
                <div className='bg-white rounded-lg col-span-2 row-span-4 flex flex-col justify-center space-y-3 py-6 px-2 shadow-sm'>
                    <div className='flex justify-center'>
                        <img className='rounded-full' src={picture} alt={name} />
                    </div>
                    <div className='flex justify-center' >
                        <div className='space-y-2 flex  flex-col max-w-fit items-center'>
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
                    </div>
                    <p className='text-[#64748B] font-medium text-center'>{bio}</p>
                    <p className='text-[#64748B] text-sm text-center'>Preferred:{email}</p>
                </div>

                <div className='col-span-2 md:col-span-1 row-span-2  bg-white py-8 rounded-lg flex flex-col justify-center items-center space-y-2 shadow-sm px-1'>
                    <p className='font-semibold text-[#244D3F] text-2xl md:text-3xl'>{days_since_contact}</p>
                    <p className='text-[#64748B] text-lg'>Days Since Contact</p>
                </div>
                <div className='col-span-2 md:col-span-1 row-span-2 bg-white py-8 rounded-lg flex flex-col justify-center items-center space-y-2 shadow-sm px-1'>
                    <p className='font-semibold text-[#244D3F] text-2xl md:text-3xl'>{goal}</p>
                    <p className='text-[#64748B] text-lg'>Goal (Days)</p>
                </div>
                <div className='col-span-2 md:col-span-1 row-span-2 bg-white py-8 rounded-lg flex flex-col justify-center items-center space-y-2 px-1 shadow-sm'>
                    <p className='font-semibold text-[#244D3F] text-2xl md:text-3xl'>{next_due_date}</p>
                    <p className='text-[#64748B] text-lg'>Next Due</p>
                </div>
                <div className='col-span-2 md:col-span-3 row-span-2 p-6 space-y-4 bg-white shadow-sm rounded-lg'>
                    <span className='flex justify-between'>
                        <p className='font-medium text-lg text-[#244D3F]'>
                            Relationship Goal
                        </p>
                        <button className='btn sm:btn-sm md:btn-md text-[#1F2937] font-medium text-sm'>Edit</button>
                    </span>
                    <div className='flex justify-start'>
                        <p className='text-[#64748B] text-lg'>Connect every <span className='text-[#1F2937] font-bold text-lg'>{days_since_contact} days</span> </p>
                    </div>
                </div>
                <div className='col-span-2 bg-white md:flex justify-center items-center py-4 shadow-sm rounded-lg hidden'>
                    <p className='font-medium text-[#1F2937]'>Snooze 2 weeks</p>
                </div>
                <div className='col-span-3 row-span-3 bg-white  space-y-4 p-6 rounded-lg'>
                    <div className='flex justify-start'>
                        <p className='font-medium text-lg text-[#244D3F]'>Quick Check-In</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        <div className='text-lg flex justify-center items-center text-[#1F2937] p-4 space-y-2 bg-[#F8FAFC] rounded-lg'>
                            <p>Call</p>
                        </div>
                        <div className='text-lg flex justify-center items-center text-[#1F2937] p-4 space-y-2 bg-[#F8FAFC] rounded-lg'>
                            <p>Text</p>
                        </div>
                        <div className='text-lg flex justify-center items-center text-[#1F2937] p-4 space-y-2 bg-[#F8FAFC] rounded-lg'>
                            <p>Video</p>
                        </div>
                    </div>
                </div>
                {/* extra btn for mobaile responsive */}
                <div className='col-span-2 bg-white flex justify-center items-center py-4 shadow-sm rounded-lg md:hidden'>
                    <p className='font-medium text-[#1F2937]'>Snooze 2 weeks</p>
                </div>
                <div className='col-span-2 bg-white flex justify-center items-center py-4 shadow-sm'>
                    <p className='font-medium text-[#1F2937]'>Archive</p>
                </div>
                <div className='col-span-2 bg-white flex justify-center items-center py-4 shadow-sm'>
                    <p className='font-medium text-[#1F2937]'>Delete</p>
                </div>
            </div>
        </div>
    );
};

export default FriendDetailsLayout;