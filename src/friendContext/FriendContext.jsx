import React, { createContext, useState } from 'react';


export const friendDataContext = createContext()

const FriendContext = ({ children }) => {
    const [call, setCall] = useState([])

    const data = {
        call,
        setCall,
    }
    return (
        <friendDataContext.Provider value={data}>{children}</friendDataContext.Provider>
    );
};

export default FriendContext;