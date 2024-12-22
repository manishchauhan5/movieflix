import React from 'react';

import PayPal from '../../assets/PayPal.png'; 
import master from '../../assets/master.png';  
import visa from '../../assets/visa.png';      
import AmericanExpress from '../../assets/AmericanExpress.png';
import movieflix from '../../assets/movieflix.jpeg';

export const Footer = () => {
  return (
    <footer className=" bg-gray-800 text-white ">
      <div className="container mx-auto px-4 lg:px-36 lg:py-8 py-5">
        <div className="grid grid-cols-12 gap-8">

          {/* First Column with 1/3 width */}
          <div className="col-span-6">
            <div className="mb-4">
              <img src={movieflix} alt="Logo" className="w-16 h-16 rounded" />
            </div>
            <p className="text-xs">
              Welcome to MovieFlix EcomStore, your ultimate destination for cutting-edge gadgets!
            </p>
            <div className="flex space-x-2 mt-4">
              {/* Payment icons */}
              <img
                src={PayPal}
                alt="Payment Method 1"
                className="w-7 h-5"
              />
              <img
                src={master}
                alt="Payment Method 2"
                className="w-7 h-5"
              />
              <img
                src={visa}
                alt="Payment Method 3"
                className="w-7 h-5"
              />
              <img
                src={AmericanExpress}
                alt="Payment Method 4"
                className="w-7 h-5"
              />
            </div>
          </div>

          {/* Shopping Links (remaining 1/3 of the width) */}
          <div className="col-span-2">
            <h3 className="font-bold mb-4">SHOPPING</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-gray-300">
                  Computer Store
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-300">
                  Laptop Store
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-300">
                  Accessories
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-300">
                  Sales & Discount
                </a>
              </li>
            </ul>
          </div>

          {/* Experience Links (remaining 1/3 of the width) */}
          <div className="col-span-2">
            <h3 className="font-bold mb-4">EXPERIENCE</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-gray-300">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-300">
                  Payment Method
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-300">
                  Delivery
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-300">
                  Return and Exchange
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="col-span-2">
            <h3 className="font-bold mb-4">NEWSLETTER</h3>
            <p className="text-sm mb-4">
              Be the first to know about new arrivals, sales & promos!
            </p>
            <form className="flex flex-col space-y-2 text-sm">
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      
        {/* Footer Bottom */}

        <hr className=" border-gray-500"/>
        <div className="text-center text-sm text-gray-500  py-5">
          Design and Code by Manish Chauhan
        </div>
    </footer>
  );
};
