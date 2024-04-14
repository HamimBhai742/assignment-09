import { NavLink } from "react-router-dom";

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

    // useEffect(() => {
    //     fetch('/public/Industrial.json')
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [])
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure className="p-5 "><img src={img} className="h-[280px] rounded-xl" alt="Shoes" /></figure>
                <div className="card-body -mt-3">
                    <h2 className="card-title font-poppins">{estate_title}</h2>
                    <p className='font-roboto'>{description.slice(0, 150)}...</p>
                    <div className="card-actions justify-end">
                        <NavLink to={`/view/${id}`} className="btn bg-[#23BE0A] font-roboto text-lg text-white font-medium">View Property</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndustrialData;