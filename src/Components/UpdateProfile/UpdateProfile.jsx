import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext)

    // const handleUpdateProfile = () => {
    //     window.location.reload()
    // }
    const [errors, setError] = useState('')
    const handleUpdateForm = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.photo.value
        console.log(name, photo);
        setError('')
        if (!/^[a-zA-Z]+(?:[\s'-][a-zA-Z]+)*$/.test(name)) {
            setError('Please provide a valid name')
            toast.error('Please provide a valid name')
            return
        }
        else if (!/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\/[-a-zA-Z0-9()@:%_\+.~#?&//=]*\.(?:jpg|jpeg|png|gif|bmp)$/.test(photo)) {
            setError('Please provide a valid image url')
            toast.error('Please provide a valid image url')
            return
        }
        updateUserProfile(name, photo)
            .then(() => {
                toast.success('Profile update Successful')
                setTimeout(() => { window.location.reload() }, 1000)
            })
            .catch(error => console.log(error))

    }
    return (
        <div className='flex'>
            <Helmet>
                <title>Update Profile</title>
            </Helmet>
            <div>
                <div className="hero">
                    <div className="card shrink-0 max-w-sm shadow-2xl bg-base-100 h-[450px] w-[550px]">
                        <form onSubmit={handleUpdateForm} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text  text-xl font-poppins text-[#403F3F] font-semibold">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered  font-poppins" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text  text-xl font-poppins text-[#403F3F] font-semibold">photoURL</span>
                                </label>
                                <input type="text" name='photo' placeholder="photoURL" className="input input-bordered font-poppins" required />
                            </div>
                            {errors && <p className='text-[red] font-poppins'>{errors}</p>}
                            <div className="form-control mt-6">
                                <input className="btn btn-primary text-xl font-roboto font-semibold" type='submit' value='Update'></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='bg-rose-100  p-5 mx-auto rounded-xl flex flex-col gap-5 w-[550px]'>

                <div className="avatar flex justify-center items-center">
                    <div className="w-36 h-36 rounded-full ring ring-[white] ring-offset-base-100 ring-offset-2">
                        <img src={user.photoURL} />
                    </div>
                </div>
                <div className='mt-3 font-poppins font-semibold'>
                    <p className='bg-white p-3 mb-3'><span className='text-lg'>Name:</span> {user.displayName}</p>
                    <p className='bg-white p-3 mb-3'><span className='text-lg'>Email:</span> {user.email}</p>
                    <p className='bg-white p-3 mb-3'><span className='text-lg'>URL:</span> {user.photoURL}</p>
                    <div className='ml-[]'>
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
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default UpdateProfile;