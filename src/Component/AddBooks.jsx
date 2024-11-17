import { useSelector , useDispatch } from "react-redux";
import { AddBook } from "../assets/BookSlice";
import { useNavigate } from "react-router-dom";

function AddBooks(){

// Getting the lastest Id
const selector = useSelector(store=>store.books.items)
const dispatch = useDispatch();
const navigate = useNavigate();
console.log(selector)

function handlesubmit(e){
    
    e.preventDefault();
    const newBook = {
        id:(selector.length+1),
        title: e.target.BookTitle.value,
        author: e.target.author.value,
        coverimage: e.target.coverpage.value,
        aboutBook: e.target.BookTitle.value,
        category: e.target.category.value,
        rating: e.target.rating.value,
    }

    if(Object.values(newBook).some(field=>!field)){
        alert("Please Fill all the Details Properly")
        return;
    }

    dispatch(AddBook(newBook))    

    e.target.reset()

    navigate("/BrowseBooks")
    
}

return(
<div className="h-dvh w-full bg-slate-950 text-cyan-400 flex justify-center items-center">

    <form onSubmit={handlesubmit} className="border-2  border-yellow-300 p-8 rounded-lg flex flex-col justify-center gap-2 " action="">

        <h1 className="text-3xl font-bold mb-4">Fill Book Details</h1>

        {/* title */}
        <label className="font-bold" htmlFor=""> Book Title </label>
        <input  className="bg-slate-800 text-white text-center" 
        type="text" placeholder="Book Title" name="BookTitle" />

        {/* Author */}
        <label className="font-bold" htmlFor=""> Author </label>
        <input  className="bg-slate-800 text-white text-center" 
        type="text" placeholder="Authors Name" name="author" />

        {/* Genre */}
        <label className="font-bold" htmlFor=""> Genre </label>
        <input  className="bg-slate-800 text-white text-center" 
        type="text" placeholder="Genre" name="category" />

        {/* Rating */}
        <label className="font-bold" htmlFor="">  Rating </label>
        <input name="rating"
        onChange={(e)=>{if(e.target.value>5 || e.target.value<1){
        alert("Enter Value Between 1-5")
        e.target.value="";
        }}}   className="bg-slate-800 text-white text-center" type="number" min="1" max="5" placeholder="Rate 1-5" />

        {/* Description */}

        <label className="font-bold" htmlFor=""> Description </label>
        <input name="aboutBook"
        className="bg-slate-800 text-white text-center" type="text" placeholder=" Write About Book" />

        {/* coverpage */}

        <label className="font-bold" htmlFor=""> image URL </label>
        <input  className="bg-slate-800 text-white text-center"
        type="text" placeholder="Enter a valid image URL" name="coverpage" />

        <button type="submit" className="border my-4"> Submit </button>

    </form>

</div>
    
)
}

export default AddBooks