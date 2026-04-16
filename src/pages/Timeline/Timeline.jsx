import React, { useContext, useState } from 'react';
import { friendDataContext } from '../../friendContext/FriendContext';
import TimelineCard from '../../components/timelineCard/TimelineCard';
import { IoIosArrowDown } from 'react-icons/io';



const Timeline = () => {
    const { call } = useContext(friendDataContext)
    const [filter, setFilter] = useState('all')

    const filterData = filter === 'all' ? call : call.filter(item => item.type.toLowerCase() === filter);

    return (
        <div className='w-11/12 mx-auto my-20 space-y-3 md:space-y-6'>
            <p className='text-2xl md:text-4xl font-bold text-[#1F2937]'>
                Timeline
            </p>
            <div className="dropdown">
                <div
                    tabIndex={0} role="button" className="text-[#64748B] text-lg py-4 px-4  btn border-[#E9E9E9] font-normal gap-10 ">
                    <p>Filter timeline</p>
                    <IoIosArrowDown />
                </div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={() => setFilter('call')}>Call</a></li>
                    <li><a onClick={() => setFilter('text')}>Text</a></li>
                    <li><a onClick={() => setFilter('video')}>Video</a></li>
                    <li><a onClick={() => setFilter('all')}>All</a></li>
                </ul>
            </div>
            {
                filterData.map(i => <TimelineCard key={i.id} i={i} />)
            }

        </div>
    );
};

export default Timeline;