import React from 'react';
import { useRouteError, useNavigate } from "react-router-dom";
import error_page from '../assets/error_page.gif';
import { NavLink } from 'react-router-dom';


export const ErrorPages = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    const handleGoBack = () =>{
        navigate(-1);
    };
    
    if (error.status === 404) {
      return (
        <section>
          <div className="flex flex-col items-center justify-center min-h-screen text-gray-800">
                        
            <img
              src={error_page}
              alt="404 Error"
              className="max-w-md"
            />
            <p className="font-bold ">The page you were looking for could not be found</p>

            <p className="mt-5">
            ... Back to previous page
            </p>
            
            <button onClick={handleGoBack} className="mt-2 py-1 px-4 bg-red-500 rounded hover:bg-red-600">
                Go Back
            </button>

          </div>
        </section>
      );
    }
  
    return <p> The page you're looking for doesn't exist.</p>;
  };

