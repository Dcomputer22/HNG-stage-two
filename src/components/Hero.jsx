import heroImage from '/images/banner-image.jpeg';
import { FaSearch } from 'react-icons/fa';

const Hero = () => {
    return (
        <>
          <header className="max-w-full relative bg-cover bg-center mt-20" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className='absolute inset-0 bg-black opacity-50'></div>
            <div className='max-w w-full relative z-10 flex items-center h-full px-[120px] py-[80px] justify-center'>
                <div className='text-center'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl font-medium text-white'>What is life without a little spice?</h1>
                    <p className='mt-4 text-md md:text-xl text-white font-light'>Shop Chanel today!</p>
                    <div className='flex mt-8 justify-center'>
                        <div className=' grid grid-cols-1 gap-4 md:flex max-w'>
                            <div className='relative focus-within:text-gray-500 px-4 flex flex-shrink'>
                                <input 
                                type="text" name='search' placeholder='Search'autoComplete='off'
                                className='w-[150px] h-[49px] md:w-[312px] md:h-[49px] pl-10 md:pl-12 md:pr-24 placeholder-gray-500 placeholder:text-sm text-black rounded-xl focus:ring-2 focus:ring-yellow2 focus:outline-none flex-shrink'
                                 />
                                 <FaSearch className='absolute w-6 h-6 inset-y-0 m-3' />
                            </div>                       
                            <button className='bg-yellow2 text-white rounded-md px-8 py-3 hover:outline hover:outline-3 hover:outline-yellow2 hover:text-yellow2 hover:bg-white'>Search</button>
                        </div>
                    </div>
                </div>
            </div>
          </header>
        </>
    )
}

export default Hero;