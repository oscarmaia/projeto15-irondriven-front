import styled from "styled-components"
import Header from "../components/Header"

export default function Checkout() {
    return (
        <>
            <Header />
            <Cont>
                <Container>
                    <Identifique>
                        <h1>Identifique-se</h1>
                        <h2>Nome</h2>
                        <input />
                        <h2>E-mail</h2>
                        <input />
                        <h2>Endereço</h2>
                        <input />

                    </Identifique>
                    <Resumo>
                        <h1>Resumo</h1>
                        <h2>Produtos: Action Kratos</h2>
                        <h2>Total 299,99</h2>
                    </Resumo>


                </Container>
                <button>Continuar</button>
            </Cont>
        </>
    )
}

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom:30px;
    margin-top:80px;
 
    @media (max-width: 400px){
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
    }
    

      h1{
        font-family: Montserrat, sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size:36px;
        color:#FFFFFF;
    }
`

const Identifique = styled.div`
    width:300px;
    height: 200px;
    border:solid 1px white;
    padding:10px 10px 10px 10px;
  h2{
        font-family: Montserrat, sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size:20px;
        color:#FFFFFF;
        
    }

`
const Resumo = styled.div`
    padding:10px 10px 10px 10px;
    border:solid 1px white;

    width:300px;
    height: 200px;
    h2{
        font-family: Montserrat, sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size:20px;
        color:#FFFFFF;
        
    }
`
const Cont = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-bottom:20px;
    min-height:100vh;   
   button{
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