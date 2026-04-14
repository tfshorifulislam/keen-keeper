import React from 'react';

const FriendDetailsLayout = ({ expectedFriendDetails }) => {
    const { picture, name, bio, status, email, tags } = expectedFriendDetails;
    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-5 gap-6 mt-10 md:mt-20'>
                <div className='col-span-2'>
                    <div>
                        <img src={picture} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetailsLayout;