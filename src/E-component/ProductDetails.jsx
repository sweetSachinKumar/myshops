import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../e-context/ProductContext'
import { CartContext } from '../e-context/CartContext'

const ProductDetails = () => {
    const { product } = useContext(ProductContext)
    const {addToCart} = useContext(CartContext)
    let { id } = useParams()

    // get the signle product based on id 
    const Yourproduct = product.find(item => {
        return item.id === parseInt(id)

    })
    

    if (!Yourproduct) {
        return (
            <section className='flex items-center justify-center h-[60vh] text-5xl tracking-wider text-neutral-700 '>
                Not Found
            </section>
        )
    }
    const { title, price, description, image } = Yourproduct
 
    return (
        <section className='h-screen pt-32 pb-12 lg:py-32 flex items-center' key={Yourproduct.id}>
            <div className='container mx-auto'>
                {/* img and text wrapper  */}
                <div className='flex flex-col lg:flex-row items-center'>
                    <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>

                        <img src={image} alt="" className='max-w-[200px] lg:max-w-sm ' />
                    </div>
                    {/* text  */}
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className='text-[26px] font-medium mb-2 max-w-[460] lg:mx-0 mx-auto'>{title}</h1>
                        <div className='text-xl text-red-500 font-medium mb-6 '> $ {price} </div>
                        <p className='mb-8'>{description}</p>
                        <button onClick={()=> addToCart(Yourproduct, Yourproduct.id)} className='bg-black py-4 rounded px-8 text-white'>Add to cart</button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ProductDetails
