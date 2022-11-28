import styled from "styled-components"

export default function EmptyCart() {
    return (
        <CartVazio>
            <h1>O carrinho está vazio</h1>
            <button>Voltar a loja</button>
        </CartVazio>
    )
}


const CartVazio = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height:600px;

    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size:36px;
    color:#FFFFFF;

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





