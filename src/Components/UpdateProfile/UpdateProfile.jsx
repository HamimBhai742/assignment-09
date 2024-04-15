import { getAuth, updateProfile } from 'firebase/auth';
import React, { useContext } from 'react';
import app from '../../fire-base-init.js/Fire-Base-Init';
import { update } from 'firebase/database';
import { AuthContext } from '../AuthProvider/AuthProvider';
import firebase from 'firebase/compat/app';
import { Helmet } from 'react-helmet-async';

const UpdateProfile = () => {

    const auth = getAuth(app)
    const { user } = useContext(AuthContext)
    const ch=firebase.user


    const handelUpdateForm = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const photo = e.target.photo.value
        console.log(name, email, photo);

        if (ch !== null) {
            ch.updateProfile({
                displayName: name, photoURL: photo
            }).then(() => {
                console.log('updated');
            })
                .catch(error => {
                    console.log(error);
                })
        }
    }
    return (
        <div>
            <form onSubmit={handelUpdateForm}>
                <Helmet><title>Update Profile</title></Helmet>
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
                <input type="submit" value="Save Change" />
            </form>
        </div>
    );
};

export default UpdateProfile;