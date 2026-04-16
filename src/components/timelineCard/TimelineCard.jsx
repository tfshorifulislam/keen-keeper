import React from 'react';
import call from '../../assets/call.png'
import text from '../../assets/text.png'
import video from '../../assets/video.png'

const iconMap = {
    call,
    text,
    video
}

const TimelineCard = ({ i }) => {

    const icon = iconMap[i.type]

    return (
        <div >
            <div className='space-y-6'>
                <div className='p-4 bg-white border border-[#E9E9E9] flex items-center gap-4 rounded-lg'>
                    <div>
                        <img src={icon} alt="" />
                    </div>
                    <div>
                        <p className='text-[#244D3F] font-medium text-xl flex gap-2'>
                            <span>
                               {i.type}
                            </span> 
                            <span
                                className='text-[#64748B] text-lg font-normal' >
                                {i.name}
                            </span>
                        </p>
                        <p className='text-[#64748B] font-medium'>
                            {new Date().toLocaleDateString('en-GB', {
                                month: 'short',
                                day: '2-digit',
                                year: 'numeric'
                            })}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimelineCard;