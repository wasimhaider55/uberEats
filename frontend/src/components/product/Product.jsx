import { ProductData } from './ProductData'
import { BsCart } from "react-icons/bs";
import { BiShow } from "react-icons/bi"


const Product = () => {
   
    return (
        <main>
            

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
                                            <BiShow size={25} className='text-gray-700' />
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