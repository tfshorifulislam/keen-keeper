import React from 'react';
import { useParams } from 'react-router';
import useFetchFriendsData from '../../useFetchFriendsData/UseFetchFriendsData';
import FriendDetailsLayout from './FriendDetailsLayout/FriendDetailsLayout';

const FriendDetails = () => {
    const { id } = useParams()
    const { friendsData, loading } = useFetchFriendsData()
    const expectedFriendDetails = friendsData.filter(f => String(f.id) === id)
    console.log(expectedFriendDetails)
    return (
        <div>
            <FriendDetailsLayout friendsData={friendsData} />
        </div>
    );
};

export default FriendDetails;