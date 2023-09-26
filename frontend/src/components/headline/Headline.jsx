import React from 'react'
import { HeadlineCard } from './HeadlineCard'

const Headline = () => {
    return (
        <div className=''>
            <HeadlineCard
                title="Sun's Out, BOGO's Out"
                description="Through  8/26"
                pic="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <HeadlineCard
                title="New Restaurents"
                description="Added Daily"
                pic="https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <HeadlineCard
                title="Burger Point"
                description="Testy"
                pic="https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
        </div>
    )
}

export default Headline