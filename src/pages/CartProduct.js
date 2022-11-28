import { useState } from "react"
import styled from "styled-components"
import EmptyCart from "../components/EmptyCart"
import Cart from "../components/Cart"
import Header from "../components/Header"

export default function CartProduct() {

    const [cart, setCart] = useState(true)

    return (
        <>
            <Header />

            {cart === false ?
                <EmptyCart /> : <Cart />

            }
        </>
    )
}
