import React from 'react'
import { CartState } from './context/Context'
import SinglePorduct from './SinglePorduct';

const Hero = () => {
    const { 
        state : {products}, } = CartState();

    return (
        <div className='flex justify-center items-center px-6 pr-10 py-6'>
            <div className=' grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  my-10 gap-10'>
                {
                    products.map((prod) => {
                        return  <SinglePorduct prod={prod} key={prod.id} />
                    })
                }
            </div>
        </div>
    )
}

export default Hero