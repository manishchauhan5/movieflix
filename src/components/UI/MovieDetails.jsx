import React from 'react';
import { useLoaderData } from 'react-router-dom';

export const MovieDetails = () => {
  // Get movie data from the loader
  const movieData = useLoaderData();

  // Destructure required properties
  const { 
    Title, Poster, Plot, imdbID, Actors, Runtime, 
    Language, Released, Genre, Director, Writer, Country 
  } = movieData;

  return (
    <li className="px-36 py-16 list-none h-lvh bg-gray-50">
      <div className="flex items-start space-x-10">

        {/* Poster Section */}
        <div className="w-[270px] h-[410px] poster-container bg-slate-100 shadow-[-5px_-5px_15px_rgba(0,0,0,0.5)] shadow-black ">
          <img 
            src={Poster} 
            className="w-[270px] h-[410px] object-cover mt-5 ml-5 bg-white shadow-xl shadow-black " 
            alt={Title} 
          />
        </div>

        {/* Movie Details Section */}
        <div className="flex-1 space-y-4 py-4 px-10">
          <h2 className="text-3xl font-bold text-gray-800">{Title}</h2>
          <p className="text-lg text-gray-600 italic">{Plot}</p>

          <div className="grid grid-cols-2 gap-3 mt-6 text-left">
            <p><span className="font-semibold 1">IMDB ID:</span> {imdbID}</p>
            <p><span className="font-semibold 2">Actors:</span> {Actors}</p>
            <p><span className="font-semibold 3">Runtime:</span> {Runtime}</p>
            <p><span className="font-semibold 4">Director:</span> {Director}</p>
            <p><span className="font-semibold 5">Language:</span> {Language}</p>
            <p><span className="font-semibold 6">Genre:</span> {Genre}</p>
            <p><span className="font-semibold 7">Released:</span> {Released}</p>           
            <p><span className="font-semibold 8">Writer:</span> {Writer}</p>
            <p><span className="font-semibold 9">Country:</span> {Country}</p>
          </div>
        </div>
      </div>
    </li>
  );
};
