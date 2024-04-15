import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const UpdateProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext)

    // const handleUpdateProfile = () => {
    //     updateUserProfile()
    // }
    return (
        <div className='bg-cyan-100 max-w-[700px] p-5 mx-auto justify-around  rounded-xl flex'>
            <Helmet>
                <title>Update Profile</title>
            </Helmet>
            <div className="avatar flex justify-center items-center">
                <div className="w-36 h-36 rounded-full ring ring-[white] ring-offset-base-100 ring-offset-2">
                    <img src={user.photoURL} />
                </div>
            </div>
            <div className='mt-3 font-poppins font-semibold'>
                <p className='bg-white p-3 mb-3'><span className='text-lg'>Name:</span> {user.displayName}</p>
                <p className='bg-white p-3 mb-3'><span className='text-lg'>Email:</span> {user.email}</p>
                <p className='bg-white p-3 mb-3'><span className='text-lg'>URL:</span> {user.photoURL}</p>
                <div className='ml-96'>
                    <button className='btn bg-[#59C6D2] text-xl font-semibold font-poppins text-white'>Save</button>
                </div>
            </div>

        </div>
    );
};

export default UpdateProfile;