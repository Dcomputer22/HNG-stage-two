import React, { useEffect, useState } from 'react';
import products from '../products.json';
import { Link } from 'react-router-dom';

const ProductOverview = () => {
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        setFilteredProducts(products.slice(0, 4));
    }, []);

    return (
        <>
        <div className="border-t mx-32 my-20">
            <div className="border-b py-20 w-auto px-32">
                <div className="flex justify-around items-center">
                    <p className="text-yellow2 font-medium border-b border-b-yellow2 pb-4 w-1/6 text-center">Overview</p>
                    <p className="text-[#3A3A3A] font-medium">Specification</p>
                    <p className="text-[#3A3A3A] font-medium">Reviews</p>
                </div>
                <div className="mt-20 px-24 text-[#9C9C9C] font-light">
                    <p className="mb-3">
                    Eating ginger can cut down on fermentation, constipation and other causes of bloating and intestinal gas.  Wear and tear on cells. Ginger contains antioxidants. These molecules  help manage free radicals, which are compounds that can damage cells  when their numbers grow too high.
                    </p>
                    <p>
                    Our products are planted, nurtured and harvested by us, so we guarantee  pure organic ingredients that aren’t adulterated in any way.
                    </p>
                </div>
            </div>

            <div className="my-20 w-auto">
            <p className="text-[#3A3A3A] font-bold text-xl">Related products</p>
            <div className='my-4 grid grid-cols-4 gap-4'>
            {filteredProducts.map(product => (
                 <div key={product.id} className='bg-white outline outline-1 outline-gray-200 drop-shadow-md hover:shadow-xl relative p-4 rounded-md mb-4'>
                  <div className='p-2 pt-4'>
                    <img src={product.image} alt={product.name} />
                    <h2 className='text-lg text-[#3A3A3A] font-medium py-1'>{product.name}</h2>
                    <p>{product.description}</p>
                    <p className='text-[#3A3A3A] font-medium py-1'>{product.amount}</p>
                    <div className='flex justify-between'>
                        <Link to='/cart' className='text-[#089244] hover:text-green-700 hover:font-bold'>Buy now</Link>
                    </div>
                  </div>
                  </div>
                    ))}
            </div> 
            </div>
        </div>
        </>
    )
}
export default ProductOverview;