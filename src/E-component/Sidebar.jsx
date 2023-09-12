import React, { useContext } from 'react'
import { CartContext } from '../e-context/CartContext'
import { SidebarContext } from '../e-context/SidebarContext'
import CartItem from './CartItem'
import {FiTrash2} from 'react-icons/fi'
import {  IoMdArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  const { cart, total, clearAll } = useContext(CartContext)
  const { handleClose, isOpen } = useContext(SidebarContext)
 
  return (
    <div className={`w-full transition-all duration-300 h-full z-50 bg-white fixed top-0 shadow-2xl md:w-[45vw] xl:max-w-[30vw] px-2 lg:px-[35px] ${isOpen ? 'right-0' : '-right-full'}  `}>
      <div>
        {/* top line  */}
        <div className='flex justify-between  px-4 py-6 border-b-2 border-gray-300  '>
          <div className='text-xl font-semibold '> your shopping items ({cart.length}) </div>
          <button onClick={handleClose} className='bg-neutral-800 px-4  py-1 rounded-sm text-white'> <IoMdArrowForward size={20} /> </button>
        </div>
        {/* items box */}
        <div className=' w-full h-[65vh] overflow-y-auto'>
          {/* product */}
          {
            cart.map(item => {
              return  <CartItem key={item.id} item={item}/>
            })
          }

        </div>
        <div className='flex flex-col gap-y-3 px-2 py-4 mt-4 bg-slate-200'>
          <div className='flex justify-between items-center '>
            {/* total */}
              <div className="uppercase font-semibold">
                <span className="mr-2 ">Total Amount :</span> $ {parseFloat(total).toFixed(2)}
              </div>
            {/* clear cart all items  */}
              <div onClick={clearAll} className='bg-red-600 hover:opacity-95 cursor-pointer p-2 rounded-md text-white'>
                <FiTrash2 size={20} />
              </div>
          </div>
          <Link to="/" className='bg-neutral-600 p-4 text-center text-white text-xl'> View Cart</Link>
          <Link to="/" className='bg-neutral-600 p-4 text-center text-white text-xl'> Checkout</Link>
        </div>
      </div>

    </div>
  )
}

export default Sidebar
