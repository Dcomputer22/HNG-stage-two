import { Link } from 'react-router-dom';
import productImage1 from '/images/image1.jpeg';
import productImage2 from '/images/image2.jpeg';
import productRating from '/svg/4.5-star.svg';

const ProductDescription = () => {
    return (
        <div className='flex mt-40 -ml-28 justify-center items-start'>
          <div className=' mr-10 bg-white outline outline-1 outline-gray-200 drop-shadow-md rounded-xl'>
          <img className='w-[500px] h-[500px]' src={productImage1} alt="Product-image" />
          </div>
          <div className='hidden mr-10'>
          <div className=' mb-6 bg-gray-200 outline outline-1 outline-gray-400 rounded-lg'>
          <img className='w-14 h-14' src={productImage1} alt="Product-image" />
          </div>
          <div className='bg-white outline outline-1 outline-gray-400 rounded-lg'>
          <img className='w-14 h-14' src={productImage2} alt="Product-image" />
          </div>
          </div>
            <div className='ml-4'>
                <h2 className='text-3xl text-[#3A3A3A] font-bold'>Organic ginger powder</h2>
                <p className='text-[#3A3A3A] my-2'>A good source of vitamins and minerals</p>
                <div className='flex justify-start'>
                        <img className='w-1/3' src={productRating} alt="Star-icon" />
                        <span className='text-[#3A3A3A] mt-2 text-lg'>(134)</span>
                        <span className='font-medium text-xl mt-2 ml-6'>N 2,000</span>
                </div>
                <div className='mt-20'>
            <div className='border-t'>
                <div className='flex'>
                    <div className='mr-8'>
                        <p className='my-2 font-medium text-[#3A3A3A]'>Size</p>
                        <button className='bg-yellow2 rounded-md text-white p-2 mr-2'>100g</button>
                        <button className='outline outline-1 outline-yellow2 text-yellow2 rounded-md p-2'>200g</button>
                    </div>
                    <div className='mx-8'>
                        <p className='my-2 font-medium text-[#3A3A3A]'>Quantity</p>
                        <button className='bg-yellow2 rounded-md text-white px-3 py-1 mr-3 opacity-25 cursor-not-allowed'>-</button>
                        <span>1</span>
                        <button className='bg-yellow2 rounded-md text-white px-3 py-1 mx-3'>+</button>
                    </div>
                </div>
                <Link to='/cart'>
                    <button className='bg-yellow2 rounded-md text-white mt-12 w-full py-2 hover:bg-yellow-500'>Add to cart</button>
                </Link>
            </div>
          </div>
          </div>
        </div>

    )
}
export default ProductDescription;
