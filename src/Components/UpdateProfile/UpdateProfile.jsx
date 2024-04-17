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
        <div className='lg:flex items-center bg-cyan-100 p-5 rounded-xl justify-around max-sm:mx-3'>
            <Helmet>
                <title>Update Profile</title>
            </Helmet>
            <div className='flex flex-col gap-5'>
                <div className="avatar flex justify-center items-center">
                    <div className="w-36 h-36 rounded-full ring ring-[white] ring-offset-base-100 ring-offset-2">
                        <img src={user.photoURL} />
                    </div>
                </div>
                <div className='mt-3 font-poppins font-semibold text-center'>
                    <div><p><span className='text-lg'>Name:</span> {user.displayName}</p></div>
                    <div><p><span className='text-lg'>Email:</span> {user.email}</p></div>
                    <div><p className='max-w-[400px]'><span className='text-lg'>URL:</span> <span>{user.photoURL}</span></p></div>
                    
                </div>

            </div>
            <div className='lg:w-[550px]'>
                <form onSubmit={handleUpdateForm} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  text-xl font-poppins text-[#403F3F] font-semibold">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered  font-poppins" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  text-xl font-poppins text-[#403F3F] font-semibold">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered font-poppins" required />
                    </div>
                    {errors && <p className='text-[red] font-poppins'>{errors}</p>}
                    <div className="form-control mt-6">
                        <input className="btn btn-primary text-xl font-roboto font-semibold" type='submit' value='Update'></input>
                    </div>
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default UpdateProfile;