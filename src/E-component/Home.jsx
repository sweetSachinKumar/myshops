import React, { useContext } from 'react'
import Banner from './Banner'
import { ProductContext } from '../e-context/ProductContext'
import loadingImg from '../img/Spinner-2.gif'
import Product from './Product'
import Footer from './Footer'

const Home = () => {

  const {product, loading} = useContext(ProductContext)
  
  // let sm = product.map(item => item.category)
  // console.log(new Set(sm))
  
  let kaamKaProdouctis = product.filter(item => item.category ==="men's clothing" || item.category === "women's clothing" )   
  
  


  return (
    <div>
      <Banner/>
    <section className='py-6  container m-auto'>
      <div className='flex justify-between items-center'>
      <h2 className='mx-4 pe-6 my-14 text-4xl font-light border-b-2 border-orange-400 inline-block'>Our Product</h2> 
  {  loading 
  && <div className='h-16 w-16 flex-1 items-start flex justify-around'>
      <img src={loadingImg} className='
      '  alt="" />
      </div> 
 }
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 max-w-sm mx-auto md:max-w-none md:mx-0 gap-8'>
        {
          kaamKaProdouctis.map(item=> <Product key={item.id} item={item} />)
        }
      </div>
    </section>
    <Footer/>
    </div>
  )
}

export default Home
