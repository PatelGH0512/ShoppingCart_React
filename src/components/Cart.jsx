import React, { useEffect, useState } from 'react';
import '../styles/cart.css'

const Cart = ({cart,setCart,handleChange}) => {

    const [price,setPrice] = useState(0);

    const handleRemove = (id) =>{
      const arr = cart.filter((item) => item.id !== id);
      setCart(arr);
    }

    const handlePrice = () => {
      let ans = 0;
      cart.map((item) => {
        ans+= item.amount * item.price;
      })
      setPrice(ans)
    }
    

    useEffect(() => {
      handlePrice();
    })
    
  return (
      <article>
        {
            cart?.map((item) => (
                <div className='cart_box' key={item.id}>
                    <div className='cart_img'>
                        <img src={item.img} alt=''/>
                        <p>{item.title}</p>
                    </div>
                    <div>
                    <button className='Addition'onClick={() => {
                      handleChange(item ,+1)
                    }}>+</button>
                    <button className='Subtraction'onClick={() => {
                      handleChange(item ,-1)
                    }}>-</button>
                    </div>
                    <div>
                      <span>{item.price}</span>
                      <button className='remove_button'onClick={() => handleRemove(item.id)}>Remove</button>
                    </div>
                </div>
            ))
        }
        <div className='total'>
          <span>Total Price of your Cart</span>
          <span> Rs - {price}</span>
        </div>
      </article>
  )
}

export default Cart
