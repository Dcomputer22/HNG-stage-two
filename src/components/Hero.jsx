import heroImage from '/images/banner-image.jpeg';
import { FaSearch } from 'react-icons/fa';

const Hero = () => {
    return (
        <>
          <header className="relative bg-cover bg-center h-[40vh] mt-20" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className='absolute inset-0 bg-black opacity-50'></div>
            <div className='relative z-10 flex items-center justify-center h-full'>
                <div className='text-center'>
                    <h1 className='text-3xl font-medium text-white'>What is life without a little spice?</h1>
                    <p className='mt-4 text-xl text-white font-light'>Shop Chanel today!</p>
                    <div className='flex mt-8 justify-center'>
                        <div className='flex w-full max-w-md'>
                            <div className='relative focus-within:text-gray-500'>
                                <input 
                                type="text" name='search' placeholder='Search'autoComplete='off'
                                className='pl-12 pr-24 py-3 placeholder-gray-500 placeholder:text-md text-black rounded-xl focus:ring-2 focus:ring-yellow2 focus:outline-none focus-within:'
                                 />
                                 <FaSearch className='absolute w-6 h-6 inset-y-0 m-3' />
                            </div>                       
                            <button className='bg-yellow2 text-white rounded-md ml-5 px-8 py-2 hover:outline hover:outline-3 hover:outline-yellow2 hover:text-yellow2 hover:bg-white'>Search</button>
                        </div>
                    </div>
                </div>
            </div>
          </header>
        </>
    )
}

export default Hero;