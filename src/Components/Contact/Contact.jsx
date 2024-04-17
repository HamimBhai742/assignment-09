import { Helmet } from 'react-helmet-async';
import { FaFax, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';


const Contact = () => {
    return (
        <div className='my-10'>
            <Helmet>
                <title>Contact Us</title>
            </Helmet>
            <div className='pt-8 flex max-sm:grid max-sm:gap-5 max-sm:grid-cols-2 max-sm:items-center justify-around max-sm:mx-3'>
                <div className='bg-white p-8 shadow-lg lg:w-64 w-52 text-center space-y-3 lg:animate-pulse'>
                    <span className='flex justify-center text-4xl text-[#59C6D2]'><FaMapMarkerAlt></FaMapMarkerAlt></span>
                    <h3 className='font-poppins lg:text-xl font-bold'>OUR MAIN OFFICE</h3>
                    <p className='font-roboto'> 94 Broadway St New York, NY 1001</p>
                </div>
                <div className='bg-white p-8 shadow-lg lg:w-64 w-52  text-center space-y-3 lg:animate-pulse'>
                    <span className='flex justify-center text-4xl text-[#59C6D2]'><FaPhoneAlt></FaPhoneAlt></span>
                    <h3 className='font-poppins lg:text-xl font-bold'>PHONE NUMBER</h3>
                    <p className='font-roboto'>234-9876-5400
                        <br />123-4567 (Toll Free)</p>
                </div>
                <div className='bg-white p-8 shadow-lg lg:w-64 w-52  text-center space-y-3 lg:animate-pulse'>
                    <span className='flex justify-center text-4xl text-[#59C6D2]'><FaFax></FaFax></span>
                    <h3 className='font-poppins lg:text-xl font-bold'>FAX</h3>
                    <p className='font-roboto'>1-234-567-7603</p>
                </div>
                <div className='bg-white p-8 shadow-lg lg:w-64 w-52  text-center space-y-3 lg:animate-pulse'>
                    <span className='flex justify-center text-4xl text-[#59C6D2]'><MdEmail></MdEmail></span>
                    <h3 className='font-poppins lg:text-xl font-bold'>EMAIL</h3>
                    <p className='font-roboto'>hello@info.com</p>
                </div>
            </div>

            <div className='bg-[#59C6D2] py-10 max-w-[700px] mx-auto -mt-8'>
                <h3 className='text-center text-3xl font-bold font-poppins text-blue-900 my-3'>Contact Us</h3>
                <div className='space-y-3 text-center'>
                    <div>
                        <label><p className='-ml-[280px] mb-2'>Email*</p></label>
                        <input className='w-80 h-10' type="email" required/>
                    </div>
                    <div>
                        <label><p className='-ml-64 mb-2'>Message*</p></label>
                        <textarea name="" id="" cols="42" rows="8"></textarea>
                    </div>
                    <div><button className='border-4 py-2 px-3  text-xl font-roboto text-blue-800 font-semibold'>Submit</button></div>
                </div>
            </div>
        </div>
    );
};

export default Contact;