import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CardTemplete from "./CardTemplete";
function HomePage(){

    const categories = [
        "Fantasy", "Mystery", "Art", "Thriller", "Science", 
        "Adventure", "Historical", "Horror", "Science"
      ];

    const selector = useSelector((store)=>store.books.items)  

    const popular = selector.filter((books)=>books.rating > 4.5)

    return (
        <>
        <div className="w-full min-h-dvh h-full bg-slate-950 flex flex-col items-center pt-5">

            {/* Welcome sign */}
            <p className=" text-cyan-400 font-bold 
            text-5xl animate-pulse">Welcome to Online Library Managment</p>

            {/* List of Categories */}
            <div className="listofcategories 
            text-gray-400
            grid grid-cols-3 gap-5 px-2 my-7"> 
                {categories.map((ele,index)=>(
                    <Link key={index} to={`/Genre/${ele}`}>
                    <p key={index} className="border-2 text-center border-cyan-600 rounded-lg p-2" >
                        {ele}
                    </p>
                    </Link>
                ))}
            </div>

            {/* Displaying Highly Rated Books */}
            <p className=" text-cyan-400 font-bold 
            text-3xl mb-3">Popular Books</p> 
            <p className="text-cyan-400">Rating Greater Than 4.5</p>

            <div className=" mt-5 mb-9 max-w-[80dvw] ">
                <div className="py-6 my-4 gap-[30px] min-h-[250px] bg-slate-900 px-4 flex flex-wrap ">
                    
                    {popular.map((book)=>(
                        <CardTemplete key={book.id} bookDetails={book} /> 
                        ))
                    }   

                </div>
            </div>
            
            

        </div>
        </>
    )
}
export default HomePage