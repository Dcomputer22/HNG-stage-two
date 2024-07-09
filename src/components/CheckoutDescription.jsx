import { Link } from "react-router-dom";

const CheckoutDescription = () => {
    return (
        <div className="mt-40 flex px-20 mb-20">
            <div className="flex-1">
                <h3 className="text-2xl font-bold mb-10">Delivery details</h3>
                <form className="pr-16">
                    <div className="grid grid-cols-2 gap-6">
                        <div class="mb-5">
                            <label for="email" className="block mb-2 text- text-[#3A3A3A] dark:text-white">First name</label>
                            <input type="email" id="email" className="border border-gray-300 text-[#9C9C9C] text-sm rounded-lg focus-within:outline-none focus:ring-1 focus-within:ring-yellow2 block w-full p-2.5" placeholder="First name" required />
                        </div>
                        <div class="mb-5">
                            <label for="email" className="block mb-2 text- text-[#3A3A3A] dark:text-white">Email address</label>
                            <input type="email" id="email" className="border border-gray-300 font text-[#9C9C9C] text-sm rounded-lg focus-within:outline-none focus:ring-2 focus-within:ring-yellow2 block w-full p-2.5" placeholder="johndoe@yahoo.com" required />
                        </div>
                        <div class="mb-5">
                            <label for="email" className="block mb-2 text- text-[#3A3A3A] dark:text-white">Last name</label>
                            <input type="email" id="email" className="border border-gray-300 text-[#9C9C9C] text-sm rounded-lg focus-within:outline-none focus:ring-1 focus-within:ring-yellow2 block w-full p-2.5" placeholder="Last name" required />
                        </div>
                        <div class="mb-5">
                            <label for="email" className="block mb-2 text- text-[#3A3A3A] dark:text-white">Phone number</label>
                            <input type="email" id="email" className="border border-gray-300 font text-[#9C9C9C] text-sm rounded-lg focus-within:outline-none focus:ring-2 focus-within:ring-yellow2 block w-full p-2.5" placeholder="+234 90078..." required />
                        </div>
                        <div class="mb-5">
                            <label for="email" className="block mb-2 text- text-[#3A3A3A] dark:text-white">Company name</label>
                            <input type="email" id="email" className="border border-gray-300 font text-[#9C9C9C] text-sm rounded-lg focus-within:outline-none focus:ring-2 focus-within:ring-yellow2 block w-full p-2.5" placeholder="Company name" required />
                        </div>
                        <div class="mb-5">
                            <label for="email" className="block mb-2 text- text-[#3A3A3A] dark:text-white">Zip code</label>
                            <select name="Zipcode" id="Zip code" className="border border-gray-300 font text-[#9C9C9C] text-sm rounded-lg focus-within:outline-none focus:ring-2 focus-within:ring-yellow2 block w-full p-2.5">
                                <option>1100111</option>
                            </select>
                        </div>
                        <div class="mb-5">
                            <label for="email" className="block mb-2 text- text-[#3A3A3A] dark:text-white">Country</label>
                            <select name="Zipcode" id="Zip code" className="border border-gray-300 font text-[#9C9C9C] text-sm rounded-lg focus-within:outline-none focus:ring-2 focus-within:ring-yellow2 block w-full p-2.5">
                                <option>Niger</option>
                            </select>
                        </div>
                        <div class="mb-5">
                            <label for="email" className="block mb-2 text- text-[#3A3A3A] dark:text-white">City</label>
                            <select name="Zipcode" id="Zip code" className="border border-gray-300 font text-[#9C9C9C] text-sm rounded-lg focus-within:outline-none focus:ring-2 focus-within:ring-yellow2 block w-full p-2.5">
                                <option>New york</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1">
                        <div class="mb-5">
                            <label for="email" className="block mb-2 text- text-[#3A3A3A] dark:text-white">Street address</label>
                            <input type="email" id="email" className="border border-gray-300 text-[#9C9C9C] text-sm rounded-lg focus-within:outline-none focus:ring-1 focus-within:ring-yellow2 block w-full p-2.5" placeholder="St, John's street, Ofada." required />
                        </div>
                    </div>                    
                </form>
            </div>
            <div className="flex-initial w-1/4">
                    <h3 className="text-[#3A3A3A] text-lg font-medium mb-6">Order summary</h3>
                    <div className="bg-[#F5F3C1] outline outline-2 outline-[#ECE683] shadow-sm rounded-xl py-5 px-10 bg-opacity-50">
                        <div className="my-4 flex justify-between text-lg">
                            <p className="text-[#6B6B6B]">Sub-total</p>
                            <p className="text-[#3A3A3A]">$1,500</p>
                        </div>
                        <div className="text-[#6B6B6B] text-wrap font-light flex justify-between">
                            <p>Delivery fee</p>
                            <p>$50</p>
                        </div>
                        <div className="text-[#6B6B6B] text-wrap font-light flex justify-between">
                            <p>VAT</p>
                            <p>$20</p>
                        </div>
                        <div className="my-4 flex justify-between text-lg">
                            <p className="text-[#6B6B6B]">Total</p>
                            <p className="text-[#3A3A3A]">$1,570</p>
                        </div>
                        <Link to='/checkout'>
                        <button className='bg-yellow2 rounded-md text-white mt-12 w-full py-2 hover:bg-yellow-500 mb-10'>Proceed to payment</button>
                        </Link>
                    </div>
                </div>
        </div>
    )
}
export default CheckoutDescription;