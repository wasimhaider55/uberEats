import React from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs"
import { TbTruckDelivery } from "react-icons/tb"
import { useState } from 'react';

export const Navbar = () => {
    const [nav, setNav] = useState(false);

    return (
        <nav className=' max-w-[1640px] mx-auto flex justify-between items-center p-4'>
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
            <div className=' bg-gray-200 rounded-full flex px-2 w-[200px] sm:w-[400x] lg:w-[500px] p-2'>
                <AiOutlineSearch size={30} />
                <input className=' bg-transparent  w-full focus:outline-none' />
            </div>

            {/* card button */}
            <button className=' bg-black text-white hidden md:flex items-center p-2 px-4 rounded-full text-xl  '>
                cart
                <BsFillCartFill size={25} className=' mr-2' />
            </button>

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
        </nav>
    )
}
