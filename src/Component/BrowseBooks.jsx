import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useSelector } from "react-redux";
import CardTemplete from "./CardTemplete";
import { useNavigate } from 'react-router-dom';

function BrowseBooks(){

    const navigate = useNavigate()

    const categories = [ 
        "Fantasy", "Mystery", "Art", "Thriller", "Science", 
        "Adventure", "Historical", "Horror", "Science"
      ];

    const [searchvalue , setvalue ] = useState("");
    const [filteredname , setfilteredname] =useState("")

    function handlesearch(){
        setfilteredname(searchvalue)
        setvalue("");
        
    }

    const selector = useSelector((store)=>store.books.items)
    
    // Filtering by Author Name And Titile

    const filteredbooks = selector.filter((books)=>books.title.toLowerCase().includes(filteredname.toLowerCase()) || 
    books.author.toLowerCase().includes(filteredname.toLowerCase()) )

    function handlecategory(e){
        if(e.target.value!="Select Genre"){
        navigate(`/Genre/${e.target.value}`)
        }
    }

    return(
        <div className="min-h-dvh w-full bg-slate-950">

            {/* Search Bar */}
            <div className="flex justify-center">
                <input onChange={(e)=>setvalue(e.target.value)} value={searchvalue} className="bg-slate-700 text-cyan-400 px-2 
                rounded-lg mr-2 mt-4 "  type="text"  /> 
                <button onClick={()=>handlesearch()} className="mt-3"><FaSearch fill="cyan"/></button>
                
                
            </div>

            {/* Drop Down For Genre */}
            <div className="flex justify-center mt-5">
            <select defaultValue={"Select Genre"} onChange={(e)=>handlecategory(e)} className="dropdown text-center text-cyan-400 rounded-lg p-2 w-40 bg-slate-800" >
                
                <option value="Select Genre"  disabled>Select Genre</option>
                {categories.map((genre,index)=>(
                    
                    <option  key={index} value={`${genre}`}>
                        {genre}
                    </option>
                    
                ))}
                

            </select>
            </div>


            {/* Displaying Books */}
            <div className="ml-auto mr-auto w-full min-h-dvh  bg-slate-950">
                
                <div className="mt-5 ml-auto mr-auto w-3/4 rounded-lg flex flex-wrap p-7 gap-y-6 bg-slate-800">
                {
                    filteredbooks.map((books)=>(
                        <CardTemplete key={books.id} bookDetails={books} />
                    ))
                }

                </div>

            </div>

        </div>
    )
}
export default BrowseBooks