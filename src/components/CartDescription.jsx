import { FaTrashAlt } from "react-icons/fa";
import Cart from "../cart.json";
import { Link } from "react-router-dom";

const CartDescription = () => {
    
    return (
        <div className="mt-40 mx-auto">
            <div className="text-center">
              <h1 className="text-2xl text-[#3A3A3A] font-medium mb-2">Cart (3)</h1>
              <p className="text-md text-[rgb(58,58,58)] mt-4">Continue shopping</p>
              <div className="border-b-2 drop-shadow-sm w-1/12 mt-2 mx-auto"></div>
            </div>
            <div className="flex mx-20 mt-20">
                <div className="flex-1">
                    <div className="flex justify-evenly mb-8 text-sm text-[#3A3A3A] font-medium">
                        <p>PRODUCT</p>
                        <p>PRICE</p>
                        <p>QUANTITY</p>
                        <p>SUB-TOTAL</p>
                    </div>
                    {
                        Cart.map(cart => {
                            return (
                                <div className="flex mx-auto relative items-center justify-between mb-10 px-4 py-2 border-2 w-3/4 shadow-sm rounded-xl">
                                    <img className="w-28" src={cart.image} alt="Ginger powder" />
                                    <div className="text-[#3A3A3A]">
                                        <p className="font-medium text-lg">Ginger powder</p>
                                        <p>100g</p>
                                    </div>
                                    <span className="text-lg text-[#9C9C9C] mr-10">$500</span>
                                    <div className="mr-20">
                                        <button className='bg-yellow2 rounded-md text-lg text-white py-2 px-4 mr-3 opacity-25 cursor-not-allowed'>-</button>
                                        <span>1</span>
                                        <button className='bg-yellow2 rounded-md text-lg text-white py-2 px-4 mx-3'>+</button>
                                        <span className="ml-20 text-lg">$500</span>
                                        <FaTrashAlt className="absolute ml-72 -mt-7 text-[#9C9C9C] text-lg" />
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="flex-initial">
                    <h3 className="text-[#3A3A3A] text-lg font-medium mb-6">Order summary</h3>
                    <div className="bg-[#F5F3C1] outline outline-2 outline-[#ECE683] shadow-sm rounded-xl py-5 px-10 bg-opacity-50">
                        <div className="my-4 flex justify-between text-lg">
                            <p className="text-[#6B6B6B]">Sub-total</p>
                            <p className="text-[#3A3A3A]">$1,500</p>
                        </div>
                        <p className="text-[#6B6B6B] text-wrap font-light">
                            Shipping and taxes are calculated at checkout
                        </p>
                        <Link to='/checkout'>
                        <button className='bg-yellow2 rounded-md text-white mt-12 w-full py-2 hover:bg-yellow-500 mb-10'>Checkout</button>
                        </Link>
                    </div>
                </div>
            </div>
          </div>
    )
}
export default CartDescription;