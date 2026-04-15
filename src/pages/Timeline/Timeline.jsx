import React, { useContext } from 'react';
import { friendDataContext } from '../../friendContext/FriendContext';
import TimelineCard from '../../components/timelineCard/TimelineCard';
import { IoIosArrowDown } from 'react-icons/io';
import TimelineTextCard from '../../components/timelineCard/timelineTextCard/TimelineTextCard';
import TimelineVideoCard from '../../components/timelineCard/timelineVideoCard/timelineVideoCard';


const Timeline = () => {
    const { call, text, video } = useContext(friendDataContext)
    console.log(call)
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
                    <li><a>Call</a></li>
                    <li><a>Text</a></li>
                    <li><a>Video</a></li>
                </ul>
            </div>
            {
                call.map(i => <TimelineCard key={i.id} i={i} />)
            }
            {
                text.map(i => <TimelineTextCard key={i.id} i={i} />)
            }
            {
                video.map(i => <TimelineVideoCard key={i.id} i={i} />)
            }

        </div>
    );
};

export default Timeline;