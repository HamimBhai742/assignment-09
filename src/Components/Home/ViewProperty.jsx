import { Helmet } from "react-helmet-async";
import { Link, useLoaderData, useLocation, useParams } from "react-router-dom";


const ViewProperty = () => {

    const clickId = useParams()
    const loderData = useLoaderData()
    const findData = loderData.find(r => r.id == clickId.id)
    console.log(loderData);
    console.log(findData);
    const location = useLocation()
    console.log(location);
    return (
        <div className="lg:flex items-center gap-8 max-sm:mx-3">
            <Helmet>
                <title>View Property</title>
            </Helmet>
            <div className=" rounded-2xl">
                <img className="rounded-xl h-[450px]" src={findData.img} alt="" />
            </div>

            <div className="max-w-[650px]">
                <h3 className="text-3xl font-poppins font-bold ">{findData.estate_title}</h3>

                <h5 className="font-roboto text-gray-500 font-medium">{findData.segment_name}</h5>
                <div className="border-b border-black my-3"></div>
                <p className="font-poppins text-gray-500">{findData.description}</p>
                <p className="font-poppins my-1"><span className="font-poppins font-bold">Location: </span> {findData.location}</p>
                <p className="font-poppins my-1"><span className="font-poppins font-bold">Price: </span>{findData.price}</p>
                <p className="font-poppins my-1"><span className="font-poppins font-bold">Area: </span>{findData.area}</p>
                <span className="font-poppins font-bold">Facilities: </span>
                <ul className="list-disc ml-12 font-poppins">
                    {findData.facilities.map((fa, idx) => <li key={idx}>{fa}</li>)}
                </ul>
                <Link to='/' className="btn bg-[#50B1C9] font-roboto text-lg font-medium text-white mt-3">Go Back</Link>
            </div>
        </div>
    );
};

export default ViewProperty;