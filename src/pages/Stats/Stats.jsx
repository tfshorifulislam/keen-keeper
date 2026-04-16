import React, { useContext } from 'react';
import { Cell, Label, Legend, Pie, PieChart, Tooltip } from 'recharts';
import { friendDataContext } from '../../friendContext/FriendContext';

const Stats = () => {
    const { call } = useContext(friendDataContext)

    const callValue = call.filter(i => i.type === 'call').length;
    const textValue = call.filter(i => i.type === 'text').length;
    const videoValue = call.filter(i => i.type === 'video').length;

    const data = [
        { name: 'Call', value: callValue },
        { name: 'Text', value: textValue },
        { name: 'Video', value: videoValue }
    ]

    const COLORS = ['#0088FE', '#00C49F', '#FF8042'];

    return (
        <div className='mt-20 w-10/12 mx-auto'>

            <div className='flex justify-center m-5 font-bold text-[#1f2937] text-xl md:text-4xl'>
                <p>Friendship Analytics</p>
            </div>

            <div className='bg-white py-10 shadow-sm rounded-xl'>
                <div className='font-medium text-sm md:text-xl text-[#244d3f] flex justify-center'>
                    <p>By Interaction Type</p>
                </div>

                <div className='flex justify-center'>
                    <PieChart
                        style={{ width: '100%', maxWidth: '100%', maxHeight: '30vh', aspectRatio: 1 }}
                        responsive
                    >

                        <Pie
                            data={data}
                            innerRadius={60}
                            outerRadius={80}
                            dataKey="value"
                        >
                            {
                                data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                                ))
                            }
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default Stats;