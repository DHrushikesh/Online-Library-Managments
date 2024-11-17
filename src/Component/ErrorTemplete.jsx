import { RiArrowGoBackLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function ErrorTemplete(){
    return(
        <>
            

            <div className="flex justify-center items-center  w-full h-dvh  bg-slate-950 text-cyan-400"> 

            {/* go Back Button */}
            <Link to={"/"}>
            <RiArrowGoBackLine className="text-3xl  rounded-lg"/> Back To Browser
            </Link>
            <h1 className="font-bold text-5xl animate-pulse">404 Error Found</h1>
            </div>
        </>
    )
}

export default ErrorTemplete