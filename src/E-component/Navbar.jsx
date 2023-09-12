import React, { useContext, useState } from 'react' 
import { Link } from 'react-router-dom'
import {BsBag} from 'react-icons/bs'
import logoImg from '../img/logo.svg'
import { SidebarContext } from '../e-context/SidebarContext'
import { CartContext } from '../e-context/CartContext'

const Navbar = () => {

  const {setIsOpen, isOpen} = useContext(SidebarContext)
 
  const {itemAmount} = useContext(CartContext)
// console.log(cart.length)

  const [isActive, setIsActive] = useState(false)
  window.addEventListener('scroll', ()=> {
    window.scrollY > 60 ? setIsActive(true): setIsActive(false)
  })
 
  return (
    <header className={`flex justify-between px-6  transition duration-300 z-40 fixed top-0 left-0 right-0 items-center ${isActive? 'bg-white py-4 shadow-md': 'bg-transparent py-2'} `}>
        <Link to="/">
        <img src={logoImg} className='w-14' alt="/" />
        </Link>

        <div  className=' relative cursor-pointer '  onClick={(()=> setIsOpen(!isOpen))} >
        
        <i  className=' text-2xl hover:scale-50  '><BsBag/></i>
            <span className='absolute text-sm bg-red-500/80  px-1 rounded-xl -bottom-3 -right-2 text-white'>{itemAmount}</span>
        </div>
    </header>
  )
}

export default Navbar
