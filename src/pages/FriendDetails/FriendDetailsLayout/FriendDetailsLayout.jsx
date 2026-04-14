import React, { useContext } from 'react';
import { BiPhoneCall } from "react-icons/bi";
import { LuMessageSquareMore } from "react-icons/lu";
import { IoVideocamOutline } from "react-icons/io5";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { HiOutlineArchive } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { friendDataContext } from '../../../friendContext/FriendContext';
import { toast } from 'react-toastify';


const FriendDetailsLayout = ({ expectedFriendDetails }) => {
    const {
        picture,
        name,
        bio,
        status,
        email,
        tags,
        days_since_contact,
        goal, next_due_date } = expectedFriendDetails;



    const { call, setCall, } = useContext(friendDataContext)


    const handleCall = () => {
        const exist = call.find(i => i.id === expectedFriendDetails.id)
        setCall([...call, expectedFriendDetails])
        toast.success('add successful')

    }

    const handleText = () => {
        const exist = call.find(i => i.id === expectedFriendDetails.id)
        setCall([...call, expectedFriendDetails])
        toast.success('add successful')

    }
    const handleVideo = () => {
        const exist = call.find(i => i.id === expectedFriendDetails.id)
        setCall([...call, expectedFriendDetails])
        toast.success('add successful')

    }

    return (
        <div className='w-11/12 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-5 grid-rows-1 md:grid-rows-7 gap-3 lg:gap-6 mt-10 md:mt-20'>
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
                    <p
                        className='text-[#64748B] font-normal md:font-medium text-center text-sm '>
                        {bio}
                    </p>
                    <div
                        className='text-[#64748B] text-sm text-center wrap-anywhere flex flex-col lg:flex-row justify-center items-center gap-1'>
                        <span>Preferred :</span>
                        <p>
                            {email}
                        </p>
                    </div>
                </div>

                <div className='col-span-2 md:col-span-1 row-span-2  bg-white py-8 rounded-lg flex flex-col justify-center items-center space-y-2 shadow-sm px-1'>
                    <p className='font-semibold text-[#244D3F] text-lg lg:text-2xl'>{days_since_contact}</p>
                    <p className='text-[#64748B] text-sm lg:text-lg text-center '>Days Since Contact</p>
                </div>
                <div className='col-span-2 md:col-span-1 row-span-2 bg-white py-8 rounded-lg flex flex-col justify-center items-center space-y-2 shadow-sm px-1'>
                    <p className='font-semibold text-[#244D3F] text-lg lg:text-2xl'>{goal}</p>
                    <p className='text-[#64748B] text-sm lg:text-lg '>Goal (Days)</p>
                </div>
                <div className='col-span-2 md:col-span-1 row-span-2 bg-white py-8 rounded-lg flex flex-col justify-center items-center space-y-2 px-1 shadow-sm'>
                    <p className='font-semibold text-[#244D3F] text-lg  lg:text-2xl'>{next_due_date}</p>
                    <p className='text-[#64748B] text-sm lg:text-lg '>Next Due</p>
                </div>
                <div className='col-span-2 md:col-span-3 row-span-2 p-6 space-y-4 bg-white shadow-sm rounded-lg'>
                    <span className='flex flex-col space-y-2 md:flex-row justify-between'>
                        <p className='font-medium text-lg text-[#244D3F]'>
                            Relationship Goal
                        </p>
                        <button className='btn sm:btn-sm md:btn-md text-[#1F2937] font-medium text-sm'>Edit</button>
                    </span>
                    <div className='flex justify-start'>
                        <p className='text-[#64748B] text-lg'>Connect every <span className='text-[#1F2937] font-bold text-lg'>{days_since_contact} days</span> </p>
                    </div>
                </div>
                <div className='col-span-2 bg-white md:flex gap-2 justify-center items-center py-4 shadow-sm rounded-lg hidden'>
                    <RiNotificationSnoozeLine />
                    <p
                        className='font-medium text-[#1F2937] '>
                        Snooze 2 weeks
                    </p>
                </div>
                <div className='col-span-2 md:col-span-3 row-span-3 bg-white  space-y-4 p-6 rounded-lg'>
                    <div className='flex justify-start'>
                        <p className='font-medium text-lg text-[#244D3F]'>Quick Check-In</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 '>

                        <div
                            onClick={() => handleCall()}
                            className='text-lg flex justify-center items-center flex-col text-[#1F2937] p-5 md:p-10 space-y-2 bg-[#F8FAFC] rounded-lg cursor-pointer cardAnimate'>
                            <BiPhoneCall className='text-2xl md:text-3xl lg:text-4xl' />
                            <p>Call</p>
                        </div>
                        <div
                            onClick={() => handleText()}
                            className='text-lg flex justify-center items-center flex-col text-[#1F2937] p-5 md:p-10 space-y-2 bg-[#F8FAFC] rounded-lg cursor-pointer cardAnimate'>
                            <LuMessageSquareMore className='text-2xl md:text-3xl lg:text-4xl' />
                            <p>Text</p>
                        </div>
                        <div
                            onClick={() => handleVideo()}
                            className='text-lg flex flex-col justify-center items-center text-[#1F2937] p-5 md:p-10 space-y-2 bg-[#F8FAFC] rounded-lg cursor-pointer cardAnimate'>
                            <IoVideocamOutline className='text-2xl md:text-3xl lg:text-4xl' />
                            <p>Video</p>
                        </div>
                    </div>
                </div>
                {/* extra btn for mobile responsive */}
                <div className='col-span-2 bg-white flex gap-2 justify-center items-center py-4 shadow-sm rounded-lg md:hidden'>
                    <RiNotificationSnoozeLine />
                    <p
                        className='font-medium text-[#1F2937]'>
                        Snooze 2 weeks
                    </p>
                </div>
                <div className='col-span-2 bg-white flex gap-2 justify-center items-center py-4 shadow-sm rounded-lg'>
                    <HiOutlineArchive />
                    <p className='font-medium text-[#1F2937]'>Archive</p>
                </div>
                <div className='col-span-2 bg-white flex gap-2 justify-center items-center py-4 shadow-sm text-red-600 rounded-lg'>
                    <RiDeleteBin6Line />
                    <p className='font-medium  text-red-600'>Delete</p>
                </div>
            </div>
        </div>
    );
};

export default FriendDetailsLayout;