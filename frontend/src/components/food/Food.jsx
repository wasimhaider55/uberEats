import React from 'react'

const Food = () => {
    return (
        <section className=' py-10'>
            <h1 className=' text-orange-600 font-bold text-4xl text-center py-3'>
                Top Rated Manu Items
            </h1>
            <div className=' flex justify-around  font-bold'>
                    <p className=''>Filter Type</p>
                    <p>Filter Price</p>
            </div>
        </section>
    )
}

export default Food