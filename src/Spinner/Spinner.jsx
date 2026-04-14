import React from 'react';
import { PacmanLoader } from 'react-spinners';

const Spinner = () => {
    return (
        <div className='flex justify-center items-center min-h-[45vh]'>
            <PacmanLoader color = "#244D3F" />
        </div>
    );
};

export default Spinner;