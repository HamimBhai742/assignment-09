import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const Profile = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    return (
        <div className='bg-[#42c3ee] max-w-[500px] p-5 mx-auto text-center rounded-xl'>
            <Helmet>
                <title>Profile</title>
            </Helmet>
            <div className="avatar flex justify-center">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user.photoURL} />
                </div>
            </div>
            <div className='mt-3 font-roboto text-lg font-bold'>
                <p>Name: {user.displayName}</p>
                <p>Email: {user.email}</p>
            </div>
        </div>
    );
};

export default Profile;