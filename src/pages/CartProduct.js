import { useState } from "react"
import styled from "styled-components"
import EmptyCart from "../components/EmptyCart"
import Cart from "../components/Cart"

export default function CartProduct() {

    const [cart, setCart] = useState(true)

    return (
        <>
            {cart === false ?
               <EmptyCart/>:<Cart/>
               
            }
        </>
    )
}
