import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [errors, setError] = useState('')

    const { handleSingUpBtn } = useContext(AuthContext)
    const handlePasswordShowBtn = () => {
        setShowPassword(!showPassword)
        console.log(showPassword);
    }
    const handelSubmitSingUpform = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const photo = e.target.photo.value
        const password = e.target.password.value
        const cheakbox=e.target.cheakbox.checked
        console.log(name, email, password, photo,cheakbox);
        setError('')
        if (!/^[a-zA-Z]+(?:[\s'-][a-zA-Z]+)*$/.test(name)) {
            setError('Please provide a valid name')
            toast.error('Please provide a valid name')
            return
        }
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            setError('Please provide a valid email')
            toast.error('Please provide a valid email')
            return
        }
        else if (!/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\/[-a-zA-Z0-9()@:%_\+.~#?&//=]*\.(?:jpg|jpeg|png|gif|bmp)$/.test(photo)) {
            setError('Please provide a valid image url')
            toast.error('Please provide a valid image url')
            return
        }
        else if (password.length < 6) {
            setError('Password minimum 6 charecter')
            toast.error('Password minimum 6 charecter')
            return
        }
        else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) {
            setError('Provide a strong password')
            toast.error('Provide a strong password')
            return
        }
        else if(!cheakbox){
            setError('Please accepted our terms and conditions')
            toast.error('Please accepted our terms and conditions')
            return
        }

        handleSingUpBtn(email, password)
            .then(r => {
                console.log(r.user);
                updateProfile(r.user, {
                    displayName: name, photoURL: photo
                })
                toast.success('Register Successful')
                e.target.reset()

            })
            .catch(error => setError('Alreay register this email'))
    }
    console.log(handleSingUpBtn);
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 rounded-xl">
                <div className="hero-content flex-col lg:flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card shrink-0 w-[552px]  shadow-2xl bg-base-100 mt-3">
                        <form onSubmit={handelSubmitSingUpform} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-poppins text-[#403F3F] font-semibold">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="Enter your name" className="input  font-poppins input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-poppins text-[#403F3F] font-semibold">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="Enter your email" className="input font-poppins input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-poppins text-[#403F3F] font-semibold">Photo URL</span>
                                </label>
                                <input name='photo' type="text" placeholder="Enter your photo url" className="input  font-poppins input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-poppins text-[#403F3F] font-semibold">Password</span>
                                </label>
                                <label className="label relative">
                                    <input name='password' type={showPassword ? 'text' : 'password'} placeholder="Enter your password" className="input  w-[552px] font-poppins  input-bordered" required />
                                    <span className='absolute text-xl top-6 right-5' onClick={handlePasswordShowBtn}>{showPassword ? <IoIosEyeOff /> : <IoIosEye />}</span>
                                </label>
                            </div>
                            <div className='flex items-center'>
                                <input className='h-4 w-4' type="checkbox" name="cheakbox" id="" />
                                <span className='ml-2 font-poppins font-medium'>Accept Term & Conditions</span>
                            </div>
                            {errors && <p className='text-[red] font-poppins'>{errors}</p>}
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary font-semibold text-xl font-poppins" value="Register" />
                            </div>
                            <p className='text-[#706F6F] font-poppins font-semibold'>Already have an account? <Link className='text-[#F75B5F]' to='/login'>Login</Link></p>
                        </form>
                        <ToastContainer></ToastContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Register;