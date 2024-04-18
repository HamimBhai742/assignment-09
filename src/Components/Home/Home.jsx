
import { Link, useLoaderData } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import IndustrialData from './IndustrialData';
import { Helmet } from 'react-helmet-async';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { FaArrowRight } from 'react-icons/fa';


const Home = () => {
    const industrialData = useLoaderData()
    console.log(industrialData);
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className="carousel w-full max-sm:h-[350px]  lg:h-[500px] rounded-xl max-sm:mx-3 md:mx-5 lg:mx-auto">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://www.prologis.com/sites/corporate/files/images/2017/03/Bratislava-DC8_10.jpg" className="w-full max-sm:h-[350px] h-[500px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <div className='absolute lg:left-44 top-16 space-y-5 md:left-16 left-10'>
                        <h3 data-aos-duration="3000" data-aos='fade' className='font-poppins text-2xl md:text-5xl font-bold md:max-w-[450px] text-[#59C6D2] md:leading-[62px]'>Move to What Moves You.</h3>
                        <p className='md:max-w-[650px] font-semibold text-white'>Real Estate develops and investe in high qulity real estate properties, project and companies that are shiping the urban fabric in dynamic cities around the world. It does so responsibly, with view to long itme perfomencr.</p>
                        <div className='mt-5'>
                            <Link to='/login' data-aos-duration="2000" data-aos='fade' className='btn animate-pulse bg-[#59C6D2] font-semibold text-white border-none font-roboto'>Login</Link >
                            <button data-aos-duration="2000" data-aos='fade-zoom-in' className='btn animate-pulse bg-white ml-5 font-semibold text-black border-none font-roboto'>Learn more</button>
                        </div>
                        <div className='mt-5 flex gap-5 max-sm:hidden'>
                            <div data-aos='fade-right' className='bg-white p-3 rounded-xl md:w-52 text-center animate-pulse'>
                                <h3 className='text-3xl font-bold font-poppins'>2500+</h3>
                                <h3 className='font-bold text-2xl font-poppins mt-2'>Happy Costumers</h3>
                            </div>
                            <div data-aos='fade-up' className='bg-white p-3 rounded-xl md:w-52 text-center animate-pulse'>
                                <h3 className='text-3xl font-bold font-poppins'>2000+</h3>
                                <h3 className='font-bold text-2xl font-poppins mt-2'>Property Ready</h3>
                            </div>
                            <div data-aos='fade-left' className='bg-white p-3 rounded-xl md:w-52 text-center animate-pulse'>
                                <h3 className='text-3xl font-bold font-poppins'>100+</h3>
                                <h3 className='font-bold text-2xl font-poppins mt-2'>Real Estate Agents</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://www.commercialrealestate.loans/cdn-images-resized/0ce6Fc4OSfiPqGygWXQJ" className="w-full max-sm:h-[350px] h-[500px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                    <div className='absolute text-center lg:left-80 md:top-28 md:left-36 left-6 top-1/3'>
                        <h3 data-aos-duration="3000" data-aos='fade' className='font-poppins md:text-4xl md:max-w-[450px] lg:text-5xl font-bold lg:max-w-[550px] text-white md:leading-[62px] max-w-96'>Exploer the  Finest Real Estate Listings and Find Your Perfect Haven!</h3>
                        <div className='mt-5'>
                            <button data-aos-duration="2000" data-aos='fade' className='btn animate-pulse bg-purple-800 font-semibold text-white border-none font-poppins'>Get Started <FaArrowRight></FaArrowRight></button>
                            <button data-aos-duration="2000" data-aos='fade-zoom-in' className='btn animate-pulse bg-white ml-5 font-semibold text-black border-none font-poppins'>Learn more</button>
                        </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://costar.brightspotcdn.com/dims4/default/29f8046/2147483647/strip/true/crop/2100x1181+0+112/resize/1200x675!/quality/90/?url=http%3A%2F%2Fcostar-brightspot.s3.us-east-1.amazonaws.com%2Fcb%2F0a%2Fe04eca014510aad5d8e31d877a4d%2Fcargo.jpg" className="w-full max-sm:h-[350px] h-[500px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className='relative'>
                        <img src="https://realestatemarket.com.mx/images/2021/01-enero/1501/Industrial_Real_Estate-_En_el_norte_cerr_2020_con_alza_I___.jpg" className="lg:w-[1170px] max-sm:h-[350px] h-[500px]" />

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            <div className='md:mt-10 mt-5 max-sm:px-3'>
                <h3 className='font-roboto text-center text-2xl lg:text-3xl font-bold text-emerald-700 uppercase'>Industrial Estated</h3>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mx-3 lg:gap-3 md:mx-10 lg:mx-auto md:gap-5'>
                    {
                        industrialData.map(ind => <IndustrialData key={ind.id} ind={ind}></IndustrialData>)
                    }
                </div>
            </div>

            <div className='mt-16'>
                <h3 className='font-roboto text-center text-2xl lg:text-3xl font-bold text-emerald-700 my-4'>WE WORK WITH</h3>
                <div className='md:grid md:grid-cols-2 lg:grid-cols-4 max-sm:flex md:gap-8 max-sm:flex-col max-sm:items-center max-sm:gap-8 md:mx-10 lg:mx-auto' data-aos="fade-up-right" data-aos-offset="200" data-aos-duration="1000">
                    <div className='bg-white shadow-lg max-w-[280px] p-5 text-center rounded-xl h-[330px] animate-pulse'>
                        <div className='flex justify-center mt-2' data-aos="fade-zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            <img src="/sm1.png" alt="" />
                        </div>
                        <h4 className='font-roboto text-2xl font-semibold text-emerald-700'>CUSTOMERS</h4>
                        <p className='font-roboto my-3'>
                            Partnerships built at the local level are the key to helping us craft the custom your business needs to be more efficient.
                        </p>
                        <div className=''>
                            <p className='flex justify-center items-center text-sm gap-2 font-poppins text-emerald-700 font-semibold'>LEARN MORE <FaArrowRight></FaArrowRight></p></div>
                    </div>
                    <div className='bg-white animate-pulse shadow-lg max-w-[280px] p-5 text-center rounded-xl h-[330px]'>
                        <div className='flex justify-center mt-1'>
                            <img src="/sm2.png" alt="" />
                        </div>
                        <h4 className='font-roboto text-2xl font-semibold text-emerald-700 -mt-3'> BROKERS</h4>
                        <p className='font-roboto my-3'>
                            Relationships with real estate brokers that help bring success to their clients.
                        </p>
                        <div className='mt-9'>
                            <p className='flex justify-center items-center text-sm gap-2 font-poppins text-emerald-700 font-semibold'>LEARN MORE <FaArrowRight></FaArrowRight></p>
                        </div>
                    </div>
                    <div className='bg-white animate-pulse flex-grow-1 shadow-lg max-w-[280px] p-5 text-center rounded-xl h-[330px]'>
                        <div className='flex justify-center'>
                            <img src="/sm3.png" alt="" />
                        </div>
                        <h4 className='font-roboto text-2xl font-semibold text-emerald-700'> PROPERTY OWNERS</h4>
                        <p className='font-roboto my-3'>
                            We don't just build. We're always looking for property and buildings to purchase.
                        </p>
                        <div className='mt-9'>
                            <p className=' flex justify-center items-center text-sm gap-2 font-poppins text-emerald-700 font-semibold'>LEARN MORE <FaArrowRight></FaArrowRight></p>
                        </div>
                    </div>
                    <div className='bg-white animate-pulse  shadow-lg max-w-[280px] p-5 text-center rounded-xl h-[330px]'>
                        <div className='flex justify-center '>
                            <img src="/sm4.png" alt="" />
                        </div>
                        <h4 className='font-roboto text-2xl font-semibold text-emerald-700'>COMMUNITIES</h4>
                        <p className='font-roboto my-3'>
                            Initiatives that build stronger and public spaces to better the places we work and live.
                        </p>
                        <div className='mt-9'>
                            <p className='flex mt-8 justify-center items-center text-sm gap-2 font-poppins text-emerald-700 font-semibold'>LEARN MORE <FaArrowRight></FaArrowRight></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-16'>

                <h3 className='font-roboto text-center text-xl lg:text-3xl font-bold text-emerald-700'>HELPING OUR CUSTOMERS SUCCEED</h3>
                <Swiper
                    cssMode={true}
                    navigation={false}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    <SwiperSlide><div className='p-5'><img src="/cm1.png" alt="" /></div></SwiperSlide>
                    <SwiperSlide><div className='p-5'><img src="/cm2.png" alt="" /></div></SwiperSlide>
                    <SwiperSlide><div className='p-5'><img src="/cm3.png" alt="" /></div></SwiperSlide>
                    <SwiperSlide><div className='p-5'><img src="/cm4.png" alt="" /></div></SwiperSlide>
                    <SwiperSlide><div className='p-5'><img src="/cm5.png" alt="" /></div></SwiperSlide>

                </Swiper>

            </div>
        </div >
    );
};

export default Home;