import logo from '/images/logo.png';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#483C31] py-8 text-white mt-3">
            <div className="container mx-auto px-[60px] flex justify-between items-start">
            <div className="flex-1 px-12 pr-60">
            <img src={logo} alt="Logo" className="mb-4" />
            <p>Stay Updated! Subscribe to our newsletter</p>
            <div className="mt-2 flex">
                <input
                type="email"
                placeholder="Email address"
                className="py-2 px-4 rounded-md border-none mr-4"
                />
                <button className="bg-yellow2 text-white px-6 rounded-md hover:bg-yellow2">
              Subscribe
            </button>
            </div>
            </div>
            <div className="flex-1">
          <h3 className="mb-4 font-bold">Quick links</h3>
          <ul>
            <li className="mb-2"><a href="#home">Home</a></li>
            <li className="mb-2"><a href="#products">Products</a></li>
            <li className="mb-2"><a href="#export">Export</a></li>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="mb-4 font-bold">About Us</h3>
          <ul>
            <li className="mb-2"><a href="#about">About Us</a></li>
            <li className="mb-2"><a href="#contact">Contact Us</a></li>
            <li className="mb-2"><a href="#privacy">Privacy Policy</a></li>
            <li className="mb-2"><a href="#terms">Terms and Conditions</a></li>
          </ul>
        </div>
            <div className='flex-1'>
                <h3 className="mb-4 font-bold">Connect With Us</h3>
                <div className="flex space-x-4">
            <a href="#facebook" className="text-white hover:text-gray-400">
              <FaFacebookF className="h-6 w-6" />
            </a>
            <a href="#instagram" className="text-white hover:text-gray-400">
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="#twitter" className="text-white hover:text-gray-400">
              <FaTwitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 text-center">
        <p>Copyright © 2023. Chanel food limited</p>
      </div>
        </footer>
    )
}

export default Footer;