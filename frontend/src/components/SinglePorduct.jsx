import React, { useState } from 'react'
import { BiShow } from "react-icons/bi"
import { CartState } from './context/Context';
import { AiOutlineClose } from "react-icons/ai"

const SinglePorduct = ({ prod }) => {
    const { state: { cart }, dispatch } = CartState()

    const [detail, setDetail] = useState([]);
    const DetailedPage = (Product) => {
        setDetail([{ ...Product }])
        setClose(true)
    }
    const [close, setClose] = useState(false);
    return (
        <main>
            {
                close ? <div className='absolute  sm:top-[525px] sm:right-16 right-3 sm:w-[600px] w-[400px] bg-white ml-32 mt-52 z-10 items-center shadow-lg shadow-slate-900 border border-white rounded-lg px-10 py-10'>
                    <div className=' max-w-full'>
                        <button onClick={() => setClose(false)} >
                            <AiOutlineClose size={30}
                                className=' absolute right-5 top-5' /> </button>
                        {
                            detail.map((x) => {
                                return (
                                    <>
                                        <div className=' flex justify-start py-10 mt-10'>
                                            <div className=' w-[250px] h-[250px] '>
                                                <img src={prod.imageUrl} alt={prod.title} className=' w-96' />
                                            </div>
                                            <div className=' ml-10  py-1'>
                                                <h1 className=' sm:text-3xl font-bold'> {prod.title}</h1>
                                                <h1 className=' text-gray-600'> {prod.description}</h1>
                                                <h1 className=' text-green-500 font-bold text-xl sm:text-2xl'> RS, {prod.price}</h1>
                                                {
                                                    cart.some((p) => p.id === prod.id) ? (
                                                        <button
                                                            onClick={() =>
                                                                dispatch({
                                                                    type: "REMOVE_FROM_CART",
                                                                    payload: prod,
                                                                })}
                                                            className=' bg-red-400 mt-14'>
                                                            Remove
                                                        </button>
                                                    ) : (
                                                        <button
                                                            onClick={() =>
                                                                dispatch({
                                                                    type: "ADD_TO_CART",
                                                                    payload: prod,
                                                                })}
                                                            className=' bg-green-300  mt-14'>
                                                            Added
                                                        </button>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
                    : null
            }


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
                            <BiShow onClick={() => DetailedPage()} size={25} className='text-gray-700' />
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
        </main>
    )
}

export default SinglePorduct