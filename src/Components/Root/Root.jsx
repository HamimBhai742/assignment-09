import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="max-w-[1170px] mx-auto my-3">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;