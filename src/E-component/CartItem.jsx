import React, { useContext } from 'react'
import { IoMdClose, IoMdAdd, IoMdRemove } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { CartContext } from '../e-context/CartContext'



const CartItem = ({ item }) => {
 const {removeFromCart, increaseAmount,decrementAmount} = useContext(CartContext)
  const {title,image, id, price, amount} = item






  return (
    <div className='flex  px-1 py-2 my-2 relative bg-gray-100/60 text-gray-700  '>

      <div>
        <img src={image} className='w-20' alt="" />
      </div>
      {/* info */}
      <div className=' px-2  w-full  '>
        <div className='mb-5 pr-12'>
          {/* title */}
                <Link to={`/product/${id}`} className='hover:underline underline-offset-4 c'> {title}</Link>
        </div>
        {/* remove icon  */}
        <div onClick={()=> removeFromCart(id)} className='text-xl cursor-pointer absolute top-8 bg-red-300 p-2 right-4 '>
          <IoMdClose className='text-gray-600 hover:text-red-500 transition' />
        </div>
        <div className='  h-[36px] text-sm flex'>

          {/* qty */}
          <div className='flex flex-1 max-w-[100px] items-center h-full border font-medium text-neutral-600   '> 
            <div onClick={()=>decrementAmount(id)} className='flex-1  h-full flex justify-center items-center cursor-pointer'>
              {/* minus icon  */}
              <IoMdRemove/>
            </div>
            <div>
              {/* amount  */}
              {amount}
            </div>
            <div onClick={()=>increaseAmount(id)} className='flex-1  h-full flex justify-center items-center cursor-pointer'>
              {/* minus icon  */}
              <IoMdAdd/>
            </div>
          </div>
          {/* item price  */}
          <div className='flex items-center font-semibold flex-1 justify-around text-neutral-500 '>$ {price}</div>

          {/* item final price  */}
          <div className='flex items-center font-semibold text-blue-950 flex-1 justify-around'>$ {price * amount}</div>
          

        </div>

        

        </div>
        
    </div>
  )
}

export default CartItem
