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
        console.log(name, email, password, photo);
        setError('')
        if (password.length < 6) {
            setError('Password minimum 6 charecter')
            toast.error('Password minimum 6 charecter')
            return
        }
        else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) {
            setError('Provide a strong password')
            toast.error('Provide a strong password')
            return
        }

        handleSingUpBtn(email, password)
            .then(r => {
                console.log(r.user);
                updateProfile(r.user, {
                    displayName: name, photoURL: photo
                })
                toast.success('Register Successful')

            })
            .catch(error => console.log(error))
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
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="Enter you name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="Enter you email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input name='photo' type="text" placeholder="Enter you photo url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <label className="label relative">
                                    <input name='password' type={showPassword ? 'text' : 'password'} placeholder="Enter your password" className="input  w-[552px]  input-bordered" required />
                                    <span className='absolute text-xl top-6 right-5' onClick={handlePasswordShowBtn}>{showPassword ? <IoIosEyeOff /> : <IoIosEye />}</span>
                                </label>
                            </div>
                            {errors && <p className='text-[red]'>{errors}</p>}
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary font-semibold text-lg" value="Register" />
                            </div>
                            <p>Already have an account? <Link className='text-blue-500 font-medium' to='/login'>Login</Link></p>
                        </form>
                        <ToastContainer></ToastContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Register;