import React, { useEffect, useState } from 'react';

const useFetchFriendsData = () => {
    const [friendsData, setFriendsData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const dataFetch = async () => {
            const res = await fetch('/friends.json');
            const data = await res.json()
            console.log(data)
            setTimeout(() => {
                setFriendsData(data)
                setLoading(false)
            }, 1500)
        }
        dataFetch()

    }, [])


    return (
        { friendsData, loading }
    );
};

export default useFetchFriendsData;