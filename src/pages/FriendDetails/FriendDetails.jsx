import React from 'react';
import { useParams } from 'react-router';
import useFetchFriendsData from '../../useFetchFriendsData/UseFetchFriendsData';
import FriendDetailsLayout from './FriendDetailsLayout/FriendDetailsLayout';

const FriendDetails = () => {
    const { id } = useParams()
    const { friendsData, loading } = useFetchFriendsData()
    const expectedFriendDetails = friendsData.find(f => String(f.id) === id)
    console.log(expectedFriendDetails)
    return (
        <div>
            <FriendDetailsLayout expectedFriendDetails={expectedFriendDetails} />
        </div>
    );
};

export default FriendDetails;