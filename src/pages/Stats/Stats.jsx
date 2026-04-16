import React, { useContext, useState } from 'react';
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
        <div className='flex justify-center items-center'>
            <PieChart
                style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }}
                responsive
                margin={{
                    top: 50,
                    right: 120,
                    bottom: 0,
                    left: 120,
                }}
            >
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
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
    );
};

export default Stats;