import React from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb"
import { useState } from 'react';
import { BsCartCheck } from "react-icons/bs"
import { Link } from "react-router-dom"
import { CartState } from '../context/Context'
import { BiSolidUser } from "react-icons/bi"
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai"

export const Navbar = () => {
    const { state: { cart },
        dispatch
    } = CartState()


    const [nav, setNav] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    return (
       
        <nav className={`relative max-w-[1640px] mx-auto flex justify-between items-center p-4 bg-gradient-to-t from-gray-300 to-gray-500`}>
            <div className=' flex item-center'>
                {/* left side */}

                <div onClick={() => setNav(!nav)} className=' cursor-pointer'>
                    <AiOutlineMenu size={40} />
                </div>

                <h1
                    className=' text-2xl sm:text-3xl lg:text-4xl'>Uber<span className='font-bold'>Eats</span>
                </h1>
            </div>

            {/* search input */}
            <div className=' bg-gray-200 rounded-full hidden md:flex px-2 w-[200px] sm:w-[400x] lg:w-[500px] p-2'>
                <AiOutlineSearch size={30} />
                <input className=' bg-transparent  w-full focus:outline-none' />
            </div>

            {/* card vs login button */}
            <div className='flex'>
                <div className='flex items-center'>
                    <Link to="/Login">
                        <h1 className=' bg-white text-black rounded-3xl flex p-3 m-1 text-md text-center  cursor-pointer'>
                            <BiSolidUser
                                size={18}
                                className=' mr-1 mt-1'
                            />
                            Log in
                        </h1>
                    </Link>
                </div>


                <dp className="cart-dropdown relative group ">
                    <div className=' flex border rounded-full p-2'
                        onClick={() => setIsOpen((prev) => !prev)}>
                        <p className=' bg-red-500 text-[13px] px-1 text-white rounded-full items-center absolute top-1 right-9'>{cart.length}</p>
                        <BsCartCheck size={30} className='mx-5' />
                        {
                            !isOpen ? (<AiOutlineCaretDown size={20} className=' mt-1' />) : (<AiOutlineCaretUp size={20} className=' mt-1' />)
                        }


                    </div>


                    {isOpen && (
                        <div className='absolute w-56  z-10  right-0  top-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg'>

                            {cart.length > 0 ? (
                                <div>
                                    {cart.map((prod) => (
                                        <div
                                            key={prod.id}
                                            className=""
                                        >
                                            <div className="flex justify-center items-center ">
                                                <img
                                                    src={prod.imageUrl}
                                                    className=" mx-auto block w-16"
                                                    alt={prod.title}
                                                />
                                                <div>
                                                    <span className="text-gray-800 font-semibold">{prod.title}</span>
                                                    <span className="text-gray-600">$ {prod.price}</span>
                                                </div>
                                            </div>
                                            <button
                                                className="text-red-600 hover:text-red-800 cursor-pointer "
                                                onClick={() =>
                                                    dispatch({
                                                        type: "REMOVE_FROM_CART",
                                                        payload: prod,
                                                    })
                                                }
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >

                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M6 18L18 6M6 6l12 12"
                                                    />
                                                </svg>
                                            </button>
                                            <hr className=' border' />
                                        </div>
                                    ))}

                                    <Link to="/cart">
                                        <button className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                            Go To Cart
                                        </button>
                                    </Link>
                                </div>
                            ) : (
                                <span className="p-10">Cart is Empty!</span>
                            )}
                        </div>
                    )}




                </dp>

            </div>



            {/* for mobile  */}

            {nav ? <div className=' bg-black/80 fixed w-full h-screen top-0 left-0 z-10'></div> : " "}

            {/* slide bar manu */}

            <div
                className={nav ? " top-0 left-0 fixed w-[300px] h-screen bg-white z-10 duration-300  " : " fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300 "}>
                <AiOutlineClose size={30}
                    onClick={() => setNav(!nav)}
                    className='absolute right-4 top-4 cursor-pointer '
                />
                <h2 className='text-2xl p-4'>
                    Uber <span className=' font-bold'> Eats</span>
                </h2>
                <div>
                    <ul className=' flex flex-col p-4 text-gray-800'>
                        <li className=' text-xl py-4 flex'><TbTruckDelivery size={30} className='mr-4' /> order</li>
                        <li className=' text-xl py-4 flex'><TbTruckDelivery size={30} className='mr-4' /> order</li>
                        <li className=' text-xl py-4 flex'><TbTruckDelivery size={30} className='mr-4' /> order</li>
                        <li className=' text-xl py-4 flex'><TbTruckDelivery size={30} className='mr-4' /> order</li>
                        <li className=' text-xl py-4 flex'><TbTruckDelivery size={30} className='mr-4' /> order</li>
                        <li className=' text-xl py-4 flex'><TbTruckDelivery size={30} className='mr-4' /> order</li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}
