import { Link } from "react-router-dom"

function Header(){


    return(
        <>
            <nav className=" bg-slate-900 h-[50px] flex justify-center items-center text-gray-300">

                <div className="container flex justify-center items-center ">
                    
                    <Link to={"/"}>
                    <p className=" no-underpne  mr-8 font-sans font-semibold hover:text-cyan-500 cursor-pointer "> Home</p >
                    </Link>
                    <Link to={"/BrowseBooks"}>
                    <p className=" no-underpne  mr-8 font-sans font-semibold hover:text-cyan-500 cursor-pointer "> Browse Books</p> 
                    </Link>
                    <Link to={"/AddBooks"}>
                    <p className=" no-underpne  mr-8 font-sans font-semibold hover:text-cyan-500 cursor-pointer "> Add Books</p>
                    </Link>
                </div>


            </nav>
        </>
    )
}

export default Header