import { NavLink } from 'react-router-dom';
import home1 from '../assets/home1.jpg'; 

export const Home = () => {
  return (
    <>
      <div
        className="bg-cover bg-center h-[662px]"
        style={{ backgroundImage: `url(${home1})` }}
      >
        <div className=" flex flex-col justify-end items-start md:px-36 px-12 md:py-16 py-7">
        <p className="text-white text-base mb-6 max-w-2xl">
          EXPLORE THE LATEST IN MOVIE INDUSTRY
        </p>
        <p className="text-white text-5xl mb-6 max-w-2xl">
          Unlimited Movies, TVs
        </p>
        <p className="text-white text-5xl mb-6 max-w-2xl">
         Shows, & More.
        </p>
        <p className="text-white text-lg mb-6 max-w-2xl">
          Discover the Top Best Movies and Dramas with a catchy subtitle like your Ultimate Guide to Must-Watch Content </p>
        <NavLink to="/movie">
        <button className="px-6 py-3 bg-blue-500 text-white text-xl font-semibold rounded-md hover:bg-blue-600">
          Explore NOW
        </button>
        </NavLink>
        </div>
      </div>
    </>
  );
};
