import { Link } from "react-router-dom"


function CardTemplete(prop){
    return(
        <>
            {/* Outer Card templete
            <div className="w-[90dvw]  h-auto mt-9">
                <div className="w-2/3 ml-auto mr-auto min-h-[250px] bg-slate-900  flex flex-wrap gap-2 ">

                </div>
            </div> */}

            <div className="w-[225px] h-[350px] text-white bg-slate-950 shadow-lg rounded-lg  mx-4  ">

                <img className="w-[195px] h-[175px]  mx-auto mt-2" src={`${prop.bookDetails.coverimage}`} alt={`${prop.bookDetails.title}`} />
                
                    {/* Images */}
                    <div className="mt-2 h-[150px] text-center py-2">
                        <h1 className="font-bold text-2xl my-2">{prop.bookDetails.title}</h1>
                        <p>{prop.bookDetails.author}</p>
                        <p>{prop.bookDetails.category}</p>
                        <span>{prop.bookDetails.rating}</span><span className="ml-2">
                        <Link className="underline" to={`/Books/${prop.bookDetails.id}`}>View More</Link></span>
                    </div>
                    
            </div>           



        </>
    )
}
export default CardTemplete