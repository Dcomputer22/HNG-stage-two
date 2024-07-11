import { Link } from "react-router-dom";
import logo from '/images/logo.png';
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {

  const [IsOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FCFCFC] shadow-md fixed z-[100] top-0 left-0 right-0
    ">
      <div className="max-w-7xl px-4">
      <div className="flex justify-between h-20 items-center mx-auto">
        <div className="flex items-center">
          <img className="w-20 h-20" src={ logo } alt="logo" />
          <span className="text-2xl md:text-3xl font-semibold text-yellow2">Chanel</span>
        </div>
        <div className="hidden md:flex md:space-x-5 ml-10 justify-center lg:space-x-10 md:text-sm lg:text-lg">
          <Link to="/" className="pt-3 px-3 font-medium text-[#3A3A3A] hover:text-yellow2 hover:border-b border-b-black">Home</Link>
          <Link to="/products" className="pt-3 px-3 font-medium text-[#3A3A3A] hover:text-yellow2 hover:border-b border-b-black">Products</Link>
          <Link to="/" className="pt-3 px-3 font-medium text-[#3A3A3A] hover:text-yellow2 hover:border-b border-b-black">About Us</Link>
          <Link to="/" className="pt-3 px-3 font-medium text-[#3A3A3A] hover:text-yellow2 hover:border-b border-b-black">Contact us</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/cart" className="text-gray-500 hover:text-yellow2 content-center">
          <FaShoppingCart className="h-6 w-6 md:h-8 md:w-8" />
          </Link>
          <Link to="/" className="outline outline-1 outline-yellow2 text-yellow2 text-nowrap px-3 py-1 md:px-4 md:py-2 rounded-md hover:text-white hover:bg-yellow2">Sign In</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen((prevState) => !prevState)}>
            {IsOpen ? <FaTimes className="h-8 w-8" /> : <FaBars className="h-8 w-8" />}
          </button>  
        </div>
      </div>
      {IsOpen && (
        <div className="md:hidden">
          <div className="flex flex-col justify-center items-center space-y-4 mt-4">
              <Link to="/" className="pt-3 px-3 font-medium text-[#3A3A3A] hover:text-yellow2 hover:border-b border-b-black">Home</Link>
              <Link to="/products" className="pt-3 px-3 font-medium text-[#3A3A3A] hover:text-yellow2 hover:border-b border-b-black">Products</Link>
              <Link to="/" className="pt-3 px-3 font-medium text-[#3A3A3A] hover:text-yellow2 hover:border-b border-b-black">About Us</Link>
              <Link to="/" className="pt-3 px-3 font-medium text-[#3A3A3A] hover:text-yellow2 hover:border-b border-b-black">Contact us</Link>
              <Link to="/" className="outline outline-1 outline-yellow2 text-yellow2 text-nowrap px-3 py-1 md:px-4 md:py-2 rounded-md hover:text-white hover:bg-yellow2">Sign In</Link>
            </div>
        </div>
      )}
      
      </div>
    </nav>
  )
}

export default Navbar