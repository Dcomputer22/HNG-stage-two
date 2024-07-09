import { Link } from "react-router-dom";
import logo from '/images/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-[#FCFCFC] shadow-md fixed z-[100] top-0 left-0 right-0
    ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20 items-center">
        <div className="flex items-center">
        <div className=" flex flex-shrink-0 items-center">
          <img className="w-20 h-20" src={ logo } alt="logo" />
          <span className="text-3xl font-semibold text-yellow2">Chanel</span>
        </div>
        <div className="flex space-x-10 ml-80 mx-auto text-lg">
          <Link to="/" className="pt-3 px-3 font-medium text-[#3A3A3A] hover:text-yellow2 hover:border-b border-b-black">Home</Link>
          <Link to="/products" className="pt-3 px-3 font-medium text-[#3A3A3A] hover:text-yellow2 hover:border-b border-b-black">Products</Link>
          <Link to="/" className="pt-3 px-3 font-medium text-[#3A3A3A] hover:text-yellow2 hover:border-b border-b-black">About Us</Link>
          <Link to="/" className="pt-3 px-3 font-medium text-[#3A3A3A] hover:text-yellow2 hover:border-b border-b-black">Contact us</Link>
        </div>
        </div>
        <div className="flex w-8 space-x-4">
          <Link to="/cart" className="text-gray-500 hover:text-yellow2 content-center">
          <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="1" d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" />
              </svg>
          </Link>
          <Link to="/" className="outline outline-1 outline-yellow2 text-yellow2 text-nowrap px-4 py-2 rounded-md hover:text-white hover:bg-yellow2">Sign In</Link>
        </div>
      </div>
      </div>
    </nav>
  )
}

export default Navbar