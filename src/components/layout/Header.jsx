import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <>
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center lg:px-24">

        {/* Logo Section */}

        <div className="text-2xl font-bold">
          <h1>MovieFlix</h1>
        </div>

        {/* Navigation Buttons */}

        <div className="flex space-x-6">

          <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-blue-400' : 'hover:text-gray-300'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-blue-400' : 'hover:text-gray-300'
              }
            >
              About
            </NavLink>
            <NavLink
              to="/movie"
              className={({ isActive }) =>
                isActive ? 'text-blue-400' : 'hover:text-gray-300'
              }
            >
              Movie
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-blue-400' : 'hover:text-gray-300'
              }
            >
              Contact
            </NavLink>

        </div>        
      </div>
    </nav>
    </>
  );
};
