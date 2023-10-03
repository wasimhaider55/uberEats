import React from 'react';
import { BiShow } from "react-icons/bi"
import { CartState } from './context/Context';

const SinglePorduct = ({ prod }) => {
    const { state: { cart }, dispatch } = CartState()
    console.log(cart);
    return (


        <div className='w-80 h-96 bg-white border rounded-lg shadow-md overflow-hidden hover:cursor-pointer hover:scale-105'>
            <img src={prod.imageUrl}
                alt={prod.title}
                className='w-full h-60 object-cover'
            />
            <div className='p-4'>
                <p className='text-gray-800 font-semibold text-xl'>{prod.title}</p>
                <p className='text-gray-500 text-sm'>{prod.description}</p>
            </div>
            <div className='flex justify-between items-center mt-2'>
                <p className='text-green-600 text-lg font-semibold pl-3'>RS, {prod.price}</p>
                <div className='flex space-x-2 pr-2'>

                    <button className='bg-gray-200 rounded-full p-2 hover:scale-105'>
                        <BiShow size={25} className='text-gray-700' />
                    </button>

                    {
                        cart.some((p) => p.id === prod.id) ? (
                            <button 
                            onClick={() =>
                                dispatch({
                                    type: "REMOVE_FROM_CART",
                                    payload: prod,
                                })}
                            className=' bg-red-400'>
                                Remove
                            </button>
                        ) : (
                            <button
                                onClick={() =>
                                    dispatch({
                                        type: "ADD_TO_CART",
                                        payload: prod,
                                    })}
                                className=' bg-green-300'>
                                Added
                            </button>
                        )
                    }



                </div>
            </div>
        </div>
    )
}

export default SinglePorduct