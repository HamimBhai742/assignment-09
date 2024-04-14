import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../AuthProvider/AuthProvider';
const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const loction = useLocation()
    console.log(loction);
    const { handelLoginBtn, singInWithPopUp, user, singInWithGitHubPopup } = useContext(AuthContext)
    const handlePasswordShowBtn = () => {
        setShowPassword(!showPassword)
        console.log(showPassword);
    }
    const navigate = useNavigate()

    const handelLoginSubmitForm = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        handelLoginBtn(email, password)
            .then(r => {
                console.log(r.user);
                navigate(loction?.state ? loction.state : '/')
            })
            .catch(error => console.log(error))
    }

    const loginWithGoogle = () => {
        singInWithPopUp()
            .then(res => {
                console.log(res.user);
            })
            .catch(error => console.log(error))
    }

    const handelGitHub = () => {
        singInWithGitHubPopup()
            .then(r => {
                console.log(r.user);
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 rounded-xl">
                <div className="hero-content flex-col lg:flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-[552px]  shadow-2xl bg-base-100 mt-3">
                        <form onSubmit={handelLoginSubmitForm} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="Enter you email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <label className="label relative">
                                    <input name='password' type={showPassword ? 'text' : 'password'} placeholder="Enter your password" className="input  w-[552px]  input-bordered" required />
                                    <span className='absolute text-xl top-6 right-5' onClick={handlePasswordShowBtn}>{showPassword ? <IoIosEyeOff /> : <IoIosEye />}</span>
                                </label>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary font-semibold text-lg" value="Login" />
                            </div>
                            <p>Don't have an account? <Link className='text-blue-500 font-medium' to='/register'>Register</Link></p>
                        </form>
                        <div className="divider px-7 -mt-6">OR</div>
                        <div>
                            <div onClick={loginWithGoogle} className='border-2 rounded-xl p-3 flex gap-3 items-center w-1/2 mx-auto'>
                                <span className=' text-xl'><FaGoogle></FaGoogle></span>
                                <span className='text-lg font-semibold'>Login with Google</span>
                            </div>
                            <div onClick={handelGitHub} className='border-2 my-3 rounded-xl p-3 flex gap-3 items-center w-1/2 mx-auto'>
                                <FaGithub className=' text-2xl'></FaGithub>
                                <span className='text-lg font-semibold'>Login with GitHub</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;