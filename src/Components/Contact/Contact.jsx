import { Helmet } from 'react-helmet-async';
import { FaFax, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';


const Contact = () => {
    return (
        <div className='my-10'>
            <Helmet>
                <title>Contact Us</title>
            </Helmet>
            <div className='pt-8 md:flex grid max-sm:gap-14 grid-cols-2 md:justify-around mx-3 lg:mx-auto'>
                <div className='bg-white p-8 shadow-lg lg:w-64 w-[200px] text-center space-y-3 lg:animate-pulse'>
                    <span className='flex justify-center text-4xl text-[#59C6D2]'><FaMapMarkerAlt></FaMapMarkerAlt></span>
                    <h3 className='font-poppins lg:text-xl lg:font-bold font-semibold'>OUR MAIN OFFICE</h3>
                    <p className='font-roboto lg:text-base text-sm'> 94 Broadway St New York, NY 1001</p>
                </div>
                <div className='bg-white p-8 shadow-lg lg:w-64 w-[200px]   text-center space-y-3 lg:animate-pulse'>
                    <span className='flex justify-center text-4xl text-[#59C6D2]'><FaPhoneAlt></FaPhoneAlt></span>
                    <h3 className='font-poppins lg:text-xl lg:font-bold font-semibold'>PHONE NUMBER</h3>
                    <p className='font-roboto lg:text-base text-sm'>234-9876-5400
                        <br />123-4567 (Toll Free)</p>
                </div>
                {/* <div className='bg-white p-8 shadow-lg lg:w-64 w-[200px]   text-center space-y-3 lg:animate-pulse'>
                    <span className='flex justify-center text-4xl text-[#59C6D2]'><FaFax></FaFax></span>
                    <h3 className='font-poppins lg:text-xl lg:font-bold font-semibold'>FAX</h3>
                    <p className='font-roboto lg:text-base text-sm'>1-234-567-7603</p>
                </div> */}
                <div className='bg-white p-8 shadow-lg lg:w-64 w-[200px] max-sm:ml-28 text-center space-y-3 lg:animate-pulse'>
                    <span className='flex justify-center text-4xl text-[#59C6D2]'><MdEmail></MdEmail></span>
                    <h3 className='font-poppins lg:text-xl lg:font-bold font-semibold'>EMAIL</h3>
                    <p className='font-roboto lg:text-base text-sm'>hello@info.com</p>
                </div>
            </div>

            <div className='bg-[#59C6D2] py-10 lg:max-w-[700px] lg:mx-auto -mt-8 max-sm:ml-8 md:mx-5'>
                <h3 className='text-center text-3xl font-bold font-poppins text-blue-900 my-3'>Contact Us</h3>
                <div className='space-y-3 text-center'>
                    <div>
                        <label><p className='lg:-ml-[280px] mb-2'>Email*</p></label>
                        <input className='lg:w-80 w-64 h-10' type="email" required/>
                    </div>
                    <div>
                        <label><p className='lg:-ml-64 mb-2'>Message*</p></label>
                        <textarea name="" id="" cols="42" rows="8" className='max-md:w-64'></textarea>
                    </div>
                    <div><button className='border-4 py-2 px-3  text-xl font-roboto text-blue-800 font-semibold'>Submit</button></div>
                </div>
            </div>
        </div>
    );
};

export default Contact;