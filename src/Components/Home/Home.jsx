
import { useLoaderData } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import IndustrialData from './IndustrialData';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const industrialData = useLoaderData()
    console.log(industrialData);
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className="carousel w-full h-[500px] rounded-3xl">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://www.prologis.com/sites/corporate/files/images/2017/03/Bratislava-DC8_10.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://www.commercialrealestate.loans/cdn-images-resized/0ce6Fc4OSfiPqGygWXQJ" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://costar.brightspotcdn.com/dims4/default/29f8046/2147483647/strip/true/crop/2100x1181+0+112/resize/1200x675!/quality/90/?url=http%3A%2F%2Fcostar-brightspot.s3.us-east-1.amazonaws.com%2Fcb%2F0a%2Fe04eca014510aad5d8e31d877a4d%2Fcargo.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://realestatemarket.com.mx/images/2021/01-enero/1501/Industrial_Real_Estate-_En_el_norte_cerr_2020_con_alza_I___.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-3 mt-10 gap-3'>
                {
                    industrialData.map(ind => <IndustrialData key={ind.id} ind={ind}></IndustrialData>)
                }
            </div>
        </div>
    );
};

export default Home;