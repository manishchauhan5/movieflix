import React from 'react';
import { NavLink } from 'react-router-dom';

export const Card = ({ curMovie }) => {
    const { Poster, imdbID, Title } = curMovie;

    return (
        <li className=" rounded-lg overflow-hidden shadow-xl shadow-black bg-gray">
            <div className="relative">
                
                {/* Movie Poster */}
                <div className="poster-container flex justify-center items-center">
                    <img
                        src={Poster}
                        className="w-4/5 h-80 object-cover mt-3 mb-12 bg-white shadow-2xl shadow-black "
                        alt={imdbID}
                    />
                </div>

                {/* Shadow effect */}
                {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-5  rounded-lg"></div> */}

                {/* Watch Now Button */}
                <NavLink to={`/movie/${imdbID}`}>
                <div className="absolute bottom-0 w-full bg-blue-700 py-2">
                    <button className="w-full text-white font-semibold uppercase tracking-wide">
                        Watch Now
                    </button>                   
                </div>
                </NavLink>
            </div>
            {/* Movie Title
            <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800 truncate">{Title}</h3>
            </div> */}
        </li>
    );
};




