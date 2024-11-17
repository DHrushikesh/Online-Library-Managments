import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { FaStar } from "react-icons/fa";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function BookDetails(){
    const bid = useParams().id;
    const selector = useSelector((store)=>store.books.items)
    const book = selector[bid-1]
    return(
        <div className="pt-4 w-full h-dvh bg-slate-950">

             {/* go Back Button */}
            <Link to={"/BrowseBooks"} className=" mr-auto ml-auto flex justify-center space-x-2">
                <RiArrowGoBackLine className="text-3xl text-cyan-400 rounded-lg" />
                <span className="text-cyan-400 text-lg">Back to Browser</span>
            </Link>


            <div className=" p-5 flex gap-6
                flex-col justify-start items-center">

                <img className="" width="250px" height="250px" src={`${book.coverimage}`} alt={book.title} />
                <h1 className="font-Bold text-cyan-400 text-5xl font-serif">{book.title}</h1>
                <p className="text-2xl font-semibold text-white">  Author : {book.author}</p>
                <p className="text-2xl font-semibold text-white">Genre - {book.category}</p>
            </div>

            <div className= "text-2xl font-semibold flex justify-center text-white">
                <FaStar className="mt-1 text-yellow-400" /> <p className="ml-2">{book.rating}</p>
            </div>

            <div className=" text-center text-cyan-400 mt-6">
                {book.aboutBook}
            </div>

        </div>      
    )
}
export default BookDetails