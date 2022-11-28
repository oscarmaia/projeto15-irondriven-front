import styled from "styled-components"
import Header from "../components/Header"

export default function Success() {
    return (
        <>
            <Header />
            <Cont>

                <Sucesso>
                    <h1>Parabens : Fulano</h1>
                    <h2>Sua compra sera entregue em breve !!</h2>
                </Sucesso>

                <button>Voltar para loja</button>
            </Cont>
        </>
    )
}

const Sucesso = styled.div`

    width:350px;
    height: 200px;
    border:solid 1px white;
    padding:10px 10px 10px 10px;

    h1{
        font-family: Montserrat, sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size:36px;
        color:#FFFFFF;
    }
    
    h2{
        font-family: Montserrat, sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size:20px;
        color:#FFFFFF;
        margin-top:10px;
        
    }

`
const Cont = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    min-height:100vh;
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