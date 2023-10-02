import React, { useState } from 'react'
import { ProductData } from './ProductData'
import { BsCart } from "react-icons/bs";
import { BiShow } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"

const Product = () => {
    const [detail, setDetail] = useState([]);
    const DetailedPage = (Product) => {
        setDetail([{ ...Product }])
        setClose(true)
    }
    const [close, setClose] = useState(false);
    return (
        <main>
            {
                close ? <div className=' absolute w-[900px] bg-white ml-32 mt-52 z-10 items-center shadow-lg shadow-slate-900 border border-white rounded-lg px-10 py-10'>
                    <div className=' max-w-full'>
                        <button onClick={() => setClose(false)} > <AiOutlineClose size={30} className=' absolute right-8 top-8' /> </button>
                        {
                            detail.map((x) => {
                                return (
                                    <>
                                        <div className=' flex justify-start py-10 mt-10'>
                                            <div className=' w-[250px] h-[250px] '>
                                                <img src={x.imageUrl} alt={x.title} className=' w-96' />
                                            </div>
                                            <div className=' ml-10  py-1'>
                                                <h1 className=' text-3xl font-bold'> {x.title}</h1>
                                                <h1 className=' text-gray-600'> {x.description}</h1>
                                                <h1 className=' text-green-500 font-bold text-2xl'> RS, {x.price}</h1>
                                                <button className=' p-2 bg-green-500 rounded-lg mt-5 ' > Add to Cart</button>
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

            <section className=' flex justify-center items-center px-6 pr-10 py-6'>
                <div className='grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  my-10 gap-10  '>
                    {
                        ProductData.map(({ title, index, imageUrl, description, price }) => (
                            <div
                                key={index}
                                className='w-80 h-96 bg-white border rounded-lg shadow-md overflow-hidden hover:cursor-pointer hover:scale-105'
                            >
                                <img src={imageUrl}
                                    alt={title}
                                    className='w-full h-60 object-cover'
                                />

                                <div className='p-4'>
                                    <p className='text-gray-800 font-semibold text-xl'>{title}</p>
                                    <p className='text-gray-500 text-sm'>{description}</p>
                                </div>
                                <div className='flex justify-between items-center mt-2'>
                                    <p className='text-green-600 text-lg font-semibold pl-3'>RS, {price}</p>
                                    <div className='flex space-x-2 pr-2'>

                                        <button className='bg-gray-200 rounded-full p-2 hover:scale-105'>
                                            <BiShow onClick={() => DetailedPage({ title, index, imageUrl, description, price })} size={25} className='text-gray-700' />
                                        </button>


                                        <button className='bg-green-800 text-white rounded-full p-2 hover:scale-110'>
                                            <BsCart size={25} />
                                        </button>

                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>


            </section>
        </main>
    )
}

export default Product