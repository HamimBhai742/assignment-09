import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='mt-10'>
            <footer className="px-4 divide-y dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                    <div className="lg:w-1/5">
                        <img src="/public/Prologis.png" alt="" />
                    </div>
                    <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                        <div className="space-y-3">
                            <ul className="space-y-1 font-poppins font-semibold">
                                <li>
                                    <a rel="noopener noreferrer" href="#">Real Estate</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Partner With Us</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Sustainability</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Essentials Solutions</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <ul className="space-y-1 font-poppins font-semibold">
                                <li>
                                    <a rel="noopener noreferrer" className='flex gap-1 items-center' href="#">Customer Login <span><FaArrowUpRightFromSquare></FaArrowUpRightFromSquare></span></a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" className='flex gap-1 items-center' href="#">Careers <FaArrowUpRightFromSquare></FaArrowUpRightFromSquare></a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Contact Us</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">About Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <ul className="space-y-1 font-poppins font-semibold">
                                <li>
                                    <a rel="noopener noreferrer" href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Terms of Use</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Accessibility Statement</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" className='flex gap-1 items-center' href="#">For Employees <FaArrowUpRightFromSquare></FaArrowUpRightFromSquare></a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-start space-x-3 text-3xl">
                                <a href='#'><FaFacebook></FaFacebook></a>
                                <a href='#'><FaTwitter></FaTwitter></a>
                                <a href='#'><FaInstagram></FaInstagram></a>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-6 text-sm text-center dark:text-gray-600 font-poppins">© 1968 Company Co. All rights reserved.</div>
            </footer>
        </div>
    );
};

export default Footer;