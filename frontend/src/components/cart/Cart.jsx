import React from 'react'

const Cart = ({ cart,setCart}) => {
  return (
    <div>
      <div>
        <div>
        {
          cart.map(({title, index, imageUrl, description, price}) => {
            return (
              <div>
                <div>
                  <img src={imageUrl} alt={title} />
                </div>
              </div>
            )
           
          })
        }
        </div>
        
      </div>
    </div>
  )
}

export default Cart