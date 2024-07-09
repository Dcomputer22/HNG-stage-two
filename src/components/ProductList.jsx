import Products from '../products.json';
import { Link } from "react-router-dom";
import productRating from '/svg/4.5-star.svg';
import heartIcon from '/svg/heart-outline.svg';
import cartIcon from '/svg/cart-outline.svg';

const ProductList = () => {
    return (
        <div className="my-6 mx-16">
            <h1 className="mb-3 text-3xl font-bold text-[#3A3A3A]">Products</h1>
            <div className="mt-4">
            <button className="outline outline-1 outline-[#9C9C9C] mr-5 py-1 px-5 rounded-md inline-flex items-center justify-between hover:bg-gray-200">
                <span className="mr-10">All</span>
                <span>
                    <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </span>
            </button>
            <button className="outline outline-1 outline-[#9C9C9C] mr-5 py-1 px-5 rounded-md inline-flex items-center justify-between hover:bg-gray-200">
                <span className="mr-10">Sort by</span>
                <span>
                    <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </span>
            </button>
            </div>

            <div className='my-4 grid grid-cols-4 gap-4 mx-auto'>
                {
                      Products.map(product => {
                        return (
                            <div key={product.id} className='bg-white outline outline-1 outline-gray-200 shadow-md hover:shadow-xl rounded-md mb-4'>
                                    <div>
                                    <img className='w-full h-60 object-cover' src={product.image} alt="Product-image" />
                                    </div>
                                    <div className='px-4 py-2'>
                                        <h2 className='text-lg text-[#3A3A3A] font-medium py-1'>{product.name}</h2>
                                        <p>{product.description}</p>
                                        <p className='text-[#3A3A3A] font-medium py-2'>{product.amount}</p>
                                        <div className='grid grid-cols-2 content-center'>
                                            <img className='w-24 h-24' src={productRating} alt="Star-icon" />
                                            <span>({product.rating.count})</span>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div className='flex'>
                                            <img className='h-6 w-6 mr-4' src={heartIcon} alt="Heart-icon" />
                                            <img className='h-6 w-6' src={cartIcon} alt="Cart-icon" />
                                            </div>
                                            <Link to='/cart' className='text-[#089244] hover:text-green-700 hover:font-bold'>Buy now</Link>
                                        </div>
                                    </div>
                                </div>
                        )
                    })
                }
            </div>
        </div>  
    )
}

export default ProductList;