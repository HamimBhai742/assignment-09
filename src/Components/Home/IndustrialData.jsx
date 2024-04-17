import { NavLink } from "react-router-dom";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";


const IndustrialData = ({ ind }) => {
    console.log(ind);
    const { img, estate_title, description, id } = ind
    console.log(img);
    // const handleViewPropertyBtn = (id) => {
    //     navigate('/view')
    //     // <propertyContext.Provider value={id}>
    //     //     {/* {navigate('/view')} */}
    //     // </propertyContext.Provider>

    // }

    useEffect(() => {
        AOS.init({
            
            duration:1000
        });
    }, [])

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl" >
                <figure data-aos="fade-up" className="p-5 "><img src={img} className="h-[280px] rounded-xl" alt="Shoes" /></figure>
                <div className="card-body -mt-3">
                    <h2 className=" card-title font-poppins" data-aos="fade-up-left">{estate_title}</h2>
                    <p className='font-roboto animate-backInDown' data-aos="fade-up-left">{description.slice(0, 150)}...</p>
                    <div className="card-actions justify-end" data-aos="fade-up-right">
                        <NavLink to={`/view/${id}`} className="btn bg-[#23BE0A] font-roboto text-lg text-white font-medium">View Property</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndustrialData;