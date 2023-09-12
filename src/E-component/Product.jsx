import React, { useContext } from 'react'
import { BsPlus, BsEyeFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { CartContext } from '../e-context/CartContext';

const Product = ({ item }) => {
    const { id, image, price, category, title } = item;

    const {addToCart} = useContext(CartContext)
    return (
      <div className="group relative overflow-hidden flex   flex-col">
      <div className='  border-2 border-[#e4e4e4]'>
        <div className="h-[300px] flex items-center justify-center  transition duration-300 group-hover:scale-110">
          <img src={image} className="w-[150px]" alt="/" />
        </div>
        <div className='absolute right-0 top-0 opacity-0 transition m-4  duration-300 group-hover:opacity-100 flex flex-col space-y-5  '>
        <button onClick={()=> addToCart(item,id)} className=" rounded-md text-l flex items-center justify-center w-14 h-9 text-white  bg-red-500 hover:bg-red-600   "><BsPlus size={30}/></button>
        <Link to={`/product/${id}`} className=" rounded-md w-14 h-9 flex items-center justify-center bg-white hover:drop-shadow-lg shadow-lg "><BsEyeFill  size={20}/></Link>


        </div>
      </div>
      <div className='items-self'>
        <div className='text-sm text-gray-500'>{category}</div>
        <p className='font-semibold text-gray-900'>{title}</p>
        <div  className='font-semibold text-orange-600'>$ {price}</div>
      </div>
    </div>
     
    )
}

export default Product
