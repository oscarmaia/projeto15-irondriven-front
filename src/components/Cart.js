import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { BASE_URL } from "../constants/urls"
import ProductCart from "./ProductCart"

export default function Cart() {
    const [products, setProducts] = useState([])
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    };
    useEffect(() => {
        axios.get(`${BASE_URL}/getProductsOnCart`, config)
            .then(res => {
                console.log(res.data)
                setProducts(res.data)
            })
            .catch(err => {
                alert(err.responsa.data)
            })
    }, [])
    return (
        <Cont>
            <h1>Carinho:</h1>
            <Carte>
                <div>
                    <h2>Produto</h2>
                    <h2>Quantidade</h2>
                    <h2>Total</h2>
                </div>
                {products.map((e) =>
                    <ProductCart
                        key={e._id}
                        id={e._id}
                        name={e.name}
                        price={e.price}
                        description={e.description}
                        image={e.image}
                    />
                )}
            </Carte>
            <Back>
                <button>Finalizar compra</button>
            </Back>
        </Cont>
    )
}

const Back = styled.div`

    display:flex;
    justify-content:center;
       button{
        margin-top:30px;
        width:188px;
        height:58px;
        border-radius:5px;

        background: #F25C05;
        color:#FFFFFF;

        cursor: pointer;

        :hover {
            width: 195px;
            height: 60px; 
            
            }
    }



`

const Cont = styled.div`
     min-height:100vh;   
    h1{
        font-family: Montserrat, sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size:36px;
        color:#FFFFFF;
        margin-bottom:20px;
        margin-left:25px;
        margin-top:100px;
    }

 

`
const Carte = styled.div`
    margin-top:20px;
    margin-left:20px;
    margin-right:20px;
    display:flex;
    flex-direction:column;
    hr{
        width:100%;
    }
        
    h2{
            color:#FFFFFF;
    }
    div{
        display:flex;
        justify-content:space-around;

    }

    img{
        width:100px;

    }
`