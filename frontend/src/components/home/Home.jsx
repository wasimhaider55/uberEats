import React from 'react'
import { Navbar } from "../navbar/Navbar";
import {HeadlineCard} from "../headline/HeadlineCard";
// import Headline from "../headline/Headline";
import Category from "../category/Category"
import Food from "../food/Food";

const home = () => {
  return (
    <main>
      {/* Navbar Import here */}
      <Navbar />

      <section className=' w-full' >
        <div className=' max-h-[580px] relative'>
          {/* overlay */}
          <div className=' absolute w-full h-full text-gray-200 max-h-[580px] bg-black/40 flex flex-col justify-center'>
            <h1 className=' px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
              The <span className=' text-orange-500'>Best</span>
            </h1>
            <h1 className=' px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
              Food <span className=' text-orange-500'>Delivered</span>
            </h1>
          </div>
          <img
            src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="burger pic"
            className=' w-full max-h-[580px] object-cover '
          />
        </div>
      </section>
      
      {/* other components import here  */}
      {/* <Headline /> */}
      <HeadlineCard />
      <Category />
      <Food />
    </main>
  )
}

export default home