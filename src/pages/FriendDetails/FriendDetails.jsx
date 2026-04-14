import React from 'react';
import { useParams } from 'react-router';
import useFetchFriendsData from '../../useFetchFriendsData/UseFetchFriendsData';
import FriendDetailsLayout from './FriendDetailsLayout/FriendDetailsLayout';
import Spinner from '../../Spinner/Spinner';
import ErrorPage from '../ErrorPage/ErrorPage';

const FriendDetails = () => {
    const { id } = useParams()
    const { friendsData, loading } = useFetchFriendsData()
    const expectedFriendDetails = friendsData.find(f => String(f.id) === id)
    console.log(expectedFriendDetails)

    if (loading) {
        return <Spinner />
    }

    if (!expectedFriendDetails) {
        return <ErrorPage />
    }

    return (
        <div className='w-11/12 mx-auto'>
            <FriendDetailsLayout expectedFriendDetails={expectedFriendDetails} />
        </div>

    );
};

export default FriendDetails;