import { useParams } from "react-router-dom" 
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import CardTemplete from "./CardTemplete"
import { RiArrowGoBackLine } from "react-icons/ri";

function CatergorisedBooks(){
     const dynamicurl = useParams()
     const urlcategory = (dynamicurl.categories)

     const selector = useSelector((store)=>store.books.items)

     const filteredlist =  selector.filter((books)=>books.category.toLowerCase().includes(urlcategory.toLowerCase()))
     
    return(<>
        {/* Filtered Books */}
        
        <div className=" text-cyan-400  bg-slate-900  py-5  flex justify-center items-center">
        
             {/* go Back Button */}
             <Link to={"/"}>
            <RiArrowGoBackLine className="text-3xl  rounded-lg"/>
            </Link>
            <p className="font-bold text-4xl ml-10">{urlcategory} Books</p>
        </div>
        
        {/* Book List */}
        <div className="ml-auto mr-auto w-full min-h-dvh bg-slate-900">
                
            <div className="ml-auto mr-auto w-3/4 flex flex-wrap p-7 gap-y-6 bg-slate-800">
            {
                filteredlist.map(
                (book)=>(
                    <CardTemplete key={book.id} bookDetails={book} />
                )
                    
                )
            }
            </div>

        </div>
        </>
    )
}
export default CatergorisedBooks