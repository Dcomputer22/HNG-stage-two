import Products from '../products.json';
import { Link } from "react-router-dom";
import productRating from '/svg/4.5-star.svg';
import heartIcon from '/svg/heart-outline.svg';
import cartIcon from '/svg/cart-outline.svg';

const ProductList = () => {
    return (
        <div className="my-6 mx-16 max-w-full">
            <h1 className="mb-3 text-3xl font-bold text-[#3A3A3A]">Products</h1>
            <form className='mt-4'>
                    <div className='grid grid-cols-2 w-3/4 md:w-1/4'>
                        <select name="select" className='border border-[#9C9C9C] focus-within:outline-none rounded-md hover:bg-gray-200 py-1 pl-2 mr-4'>
                            <option >All</option>
                            <option >Some</option>
                        </select>
                        <select name="select" className='border border-[#9C9C9C] focus-within:outline-none rounded-md hover:bg-gray-200 py-1 pl-2 ml-4'>
                            <option >Sort by</option>
                            <option >Name</option>
                            <option >Rating</option>
                        </select>
                    </div>
                </form>

            <div className='my-4 md:grid md:grid-cols-2 md:gap-4 lg:grid lg:grid-cols-3 lg:gap-4 xl:grid xl:grid-cols-4 xl:gap-4 mx-auto'>
                {
                      Products.map(product => {
                        return (
                            <div key={product.id} className='bg-white outline outline-1 outline-gray-200 shadow-md hover:shadow-xl rounded-md mb-4'>
                                    <div>
                                    <img className='w-full h-60 object-fill' src={product.image} alt="Product-image" />
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
                                            <Link to='/products' className='text-[#089244] hover:text-green-700 hover:font-bold'>Buy now</Link>
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