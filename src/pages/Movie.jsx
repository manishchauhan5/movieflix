import { useLoaderData } from "react-router-dom";
import { Card } from "../components/UI/Card";

export const Movie = () =>{
    const moviesData = useLoaderData();
    // console.log(moviesData);
    return(
        <div className="md:px-36 md:py-16 px-8 py-5 bg-[#f5f5f4] shadow-2xl">
        <ul className="grid md:grid-cols-4 grid-cols-2 gap-20">
        {moviesData && moviesData.Search.map((curMovie) =>{
            return <Card key={curMovie.imdbID} curMovie ={curMovie}/>;
           })}
        </ul>
        </div>        
    );
};