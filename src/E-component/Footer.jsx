import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../img/logo.svg'
const Footer = () => {
  return (
    <footer
    className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
    <div className="p-4 text-center text-neutral-700 dark:text-neutral-200 flex items-center justify-center space-x-5">
    <span> &copy; 2023 Copyright:</span> 
      <Link 
        className="text-neutral-800 dark:text-neutral-400  flex justify-center items-center"
        to="/"
        > 
       
        <span>sachin's clothing store </span> 
        <div>
            <img src={logoImg} className='w-6 ml-2 ' alt="" />
         </div>
        </Link>

    </div>
  </footer>
  )
}

export default Footer
