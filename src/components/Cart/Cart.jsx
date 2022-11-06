import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartViewContainer from "./CartViewContainer";
import EmptyCart from "./EmptyCart";



export default function Cart() {

    const { cart } = useContext(CartContext)
    


  return (
            cart.length > 0 ? ( <CartViewContainer /> ) : ( <EmptyCart />)    
        
        )
    }