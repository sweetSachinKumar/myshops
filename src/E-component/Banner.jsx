import React  from 'react'
import { Link } from 'react-router-dom'
import bgImg from '../img/bg_hero.svg'
import womanBrand from '../img/woman_hero.png'
const Banner = () => {
   return (
    <div>
      <section style={{background:`url(${bgImg})`}} className='  justify-around flex   items-center h-[80vh] -ml-2 -mt-3 px-6 overflow-hidden bg-red-400'>
        <div>
            <div className='flex items-center  uppercase'>
                <div className='w-9 bg-red-500 mr-2 h-0.5'></div>
                <div> new Style </div>
            </div>
            <div>
                <div className=' mb-4  uppercase leading-[1.1] text-6xl font-light'>
                    Autumn Sale stylesh <br /> <span className='font-semibold'>womans</span>
                </div>
            </div>
            <Link to="/" className="text-xl   border-b-2 self-start border-gray-900">
            Discover More
            </Link>
            </div>
            <img src={womanBrand} style={{height: "calc(100% - 50px)" }} className='hidden lg:block' alt="" />
      </section>
    </div>
  )
}

export default Banner
