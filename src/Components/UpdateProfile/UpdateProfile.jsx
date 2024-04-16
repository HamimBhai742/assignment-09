import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const UpdateProfile = () => {
    const { user } = useContext(AuthContext)

    // const handleUpdateProfile = () => {
    //     window.location.reload()
    // }
    return (
        <div className='bg-rose-100  p-5 mx-auto rounded-xl flex flex-col gap-5 w-[800px]'>
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
                <div className='ml-[670px]'>
                    {/* <button className='btn bg-[#59C6D2] text-xl font-semibold font-poppins text-white'>Save</button> */}

                    {/* The button to open modal */}
                    <label htmlFor="my_modal_6" className='btn bg-[#59C6D2] text-xl font-semibold font-poppins text-white'>Save</label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                    <div className="modal" role="dialog">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Thank you for updating!</p>
                            <div className="modal-action">
                                <label htmlFor="my_modal_6" className="btn bg-emerald-500 text-white text-lg font-roboto ">ok</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UpdateProfile;