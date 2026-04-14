import React, { createContext, useState } from 'react';


export const friendDataContext = createContext()

const FriendContext = ({ children }) => {
    const [call, setCall] = useState([])
    const [text, setText] = useState([]);
    const [video, setVideo] = useState([]);

    const data = {
        call,
        setCall,
        text,
        setText,
        video,
        setVideo
    }
    return (
        <friendDataContext.Provider value={data}>{children}</friendDataContext.Provider>
    );
};

export default FriendContext;