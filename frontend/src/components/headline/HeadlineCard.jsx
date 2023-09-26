import React from 'react'

export const HeadlineCard = ({ title, description, pic }) => {
    return (
        <section className=' max-w-[1640px] mx-auto p-4 py-12  grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
            <card className=' rounded-xl relative'>
                {/* Overlay */}
                <div className=' absolute w-full h-full  bg-black/40 rounded-xl text-white'>
                    <p className=' font-bold text-2xl px-2 pt-2'>Sun's Out, BOGO's Out </p>
                    <p className=' px-2'>Through  8/26</p>
                    <button className=' border-white bg-white text-black mx-2 absolute bottom-4 rounded-full p-2 font-bold'>
                        Order Now
                    </button>
                </div>
                <img
                    src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="burger"
                    className=' max-h-[230px] md:max-h-[300px] w-full object-cover rounded-xl'
                />
            </card>

            <card className=' rounded-xl relative'>
                {/* Overlay */}
                <div className=' absolute w-full h-full  bg-black/40 rounded-xl text-white'>
                    <p className=' font-bold text-2xl px-2 pt-2'>Sun's Out, BOGO's Out </p>
                    <p className=' px-2'>Through  8/26</p>
                    <button className=' border-white bg-white text-black mx-2 absolute bottom-4 rounded-full p-2 font-bold'>
                        Order Now
                    </button>
                </div>
                <img
                    src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="burger"
                    className=' max-h-[230px] md:max-h-[300px] w-full object-cover rounded-xl'
                />
            </card>
            <card className=' rounded-xl relative'>
                {/* Overlay */}
                <div className=' absolute w-full h-full  bg-black/40 rounded-xl text-white'>
                    <p className=' font-bold text-2xl px-2 pt-2'>Sun's Out, BOGO's Out </p>
                    <p className=' px-2'>Through  8/26</p>
                    <button className=' border-white bg-white text-black mx-2 absolute bottom-4 rounded-full p-2 font-bold'>
                        Order Now
                    </button>
                </div>
                <img
                    src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="burger"
                    className=' max-h-[230px] md:max-h-[300px] w-full object-cover rounded-xl'
                />
            </card>
            <card className=' rounded-xl relative'>
                {/* Overlay */}
                <div className=' absolute w-full h-full  bg-black/40 rounded-xl text-white'>
                    <p className=' font-bold text-2xl px-2 pt-2'>Sun's Out, BOGO's Out </p>
                    <p className=' px-2'>Through  8/26</p>
                    <button className=' border-white bg-white text-black mx-2 absolute bottom-4 rounded-full p-2 font-bold'>
                        Order Now
                    </button>
                </div>
                <img
                    src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="burger"
                    className=' max-h-[230px] md:max-h-[300px] w-full object-cover rounded-xl'
                />
            </card>
            <card className=' rounded-xl relative'>
                {/* Overlay */}
                <div className=' absolute w-full h-full  bg-black/40 rounded-xl text-white'>
                    <p className=' font-bold text-2xl px-2 pt-2'>Sun's Out, BOGO's Out </p>
                    <p className=' px-2'>Through  8/26</p>
                    <button className=' border-white bg-white text-black mx-2 absolute bottom-4 rounded-full p-2 font-bold'>
                        Order Now
                    </button>
                </div>
                <img
                    src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="burger"
                    className=' max-h-[230px] md:max-h-[300px] w-full object-cover rounded-xl'
                />
            </card>
        </section>

    )
}
