import { createContext, useEffect, useState } from "react";
import LoadingBar from 'react-top-loading-bar';


// create Context 
export  const ProductContext = createContext()



const ProductProvider = ({children}) => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const [progress , setProgress] = useState(LoadingBar)

    const fetchData = async() => {
        try{
            setProgress(19)
            const response = await fetch("https://fakestoreapi.com/products")
            setProgress(49)

            const data = await response.json()
            setProgress(70)

            setProduct(data)

            setProgress(100)
            setLoading(false)

        }catch(err){
            console.error(err)
            console.log('here is some problem')
        }
    }
    // fetchData()
    useEffect(()=>{
        fetchData()
    }, [])

    return <ProductContext.Provider value={{product, setProgress, LoadingBar, progress , loading}}  >
        
        {children}
    </ProductContext.Provider>
}

export default ProductProvider;