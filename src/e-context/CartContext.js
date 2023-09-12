import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

const  CartProvider = ({children}) =>{

    const [cart, setCart] = useState([])
    
    const [itemAmount, setItemAmount] = useState(0)
    // totla price 
    const [total, setTotal] = useState(0)



useEffect(()=> {
const itemAmounts = cart.reduce((accumulator, currentItem)=> {
    return accumulator + currentItem.amount
},0)
setItemAmount(itemAmounts)
}, [cart])


useEffect(()=> {
const totals = cart.reduce((accumulator, currentItem)=> {
    return accumulator + currentItem.price * currentItem.amount
},0)
setTotal(totals)
}, [cart])




    // add item to cart 
    const addToCart = (product, id) => {

        const newItem =  {...product, amount :1 }
        // check if the item is already in the cart 
        const cartItem = cart.find(item =>  item.id === id)
    
        if(cartItem){
            const newCart = [...cart].map(item => {
                if(item.id === id) {
                    return {...item, amount:cartItem.amount + 1 }
                }
                else{
                    return item 
                }
            })
            setCart(newCart)
        }else{
            setCart( [...cart, newItem])
    
        }
    
    
      
    }
    
    
    


// clear item from cart /
const removeFromCart = (id)=> {
    const newCart = cart.filter(item=> {
        return item.id !== id
    })
    setCart(newCart)
}

// increment amount 
const increaseAmount = (id) => {
    const cartItem = cart.find(item=> item.id === id)
    addToCart(cartItem, id)
}

// decrement amount

const decrementAmount = (id)=> {
    const cartItem = cart.find(item=> item.id === id)
    
    if(cartItem){
        const newCart = [...cart].map(item => {
            if(item.id ===id){
                return {...item, amount:cartItem.amount - 1}
            } else{
                return item 
            }
        })
        setCart(newCart)
    }
    
    if(cartItem.amount < 2) {
        removeFromCart(id)
    }
}



// clear all items from from cart
const clearAll = ()=> {
    setCart([])
}


    return <CartContext.Provider value={{addToCart,total, increaseAmount ,decrementAmount,clearAll, cart, removeFromCart,itemAmount}}  >
        {children}
    </CartContext.Provider>
}

export default CartProvider