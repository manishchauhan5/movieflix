import React from 'react'
import { Home } from './pages/Home';
import { Movie } from './pages/Movie';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { AppLayout } from './components/layout/AppLayout';
import { ErrorPages } from './pages/ErrorPages';
import { getMoviesData } from './api/GetApiData';
import {MovieDetails} from './components/UI/MovieDetails';
import { getMoviesDetails } from './api/GetMoviesDetailsApi';
import { contactData } from './pages/Contact';

export const App = () => {

  const router = createBrowserRouter([
    { 
      path:"/",
      element:<AppLayout/>,
      errorElement: <ErrorPages/>,
      children:[
        { 
          path:"/",
          element:<Home/>
          },
          { 
            path:"about",
            element:<About/>
          },
          { 
            path:"movie",
            element:<Movie/>,
            loader: getMoviesData,
          },
          { 
            path:"movie/:movieID",
            element:<MovieDetails/>,
            loader: getMoviesDetails,
            
          },
          { 
            path:"contact",
            element:<Contact/>,
            action: contactData,

          },
      ]
    },  

  ]);


  return <RouterProvider router={router}/> ;
};




  // OLD WAY OF ROUTING

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path="/" element={<Home/>} />
  //       <Route path="/about" element={<About/>} />
  //       <Route path="/contact" element={<Contact/>} />
  //       <Route path="/movie" element={<Movie/>} />
  //       <Route path="*" element={<h1>404 Not Found</h1>} />
  //     </Route>
  //   )
  // );

