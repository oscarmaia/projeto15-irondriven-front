import styled from "styled-components";
import { TEXT_COLOR } from "../constants/colors";

export default function Product({name,price,image}) {
    return (
        <ProductContainer>
            <StyledFrame>
                <img src="https://cdn.awsli.com.br/1000x1000/138/138431/produto/89739734/263291ac75.jpg" alt={name}></img>
            </StyledFrame>
            <h1>Luffy action figure oscar</h1>
            <h2>R$ 27,35</h2>
        </ProductContainer>
    )
}

const ProductContainer = styled.div`
    max-height: 350px;
    max-width: 210px;
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    h1{
        margin-top: 5px;
        font-weight: 700;
        color: white;
    }
    h2{
        margin-top: 5px;
        font-weight: 700;
        color: white;
    }
`

const StyledFrame = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    border: solid white;
    border-radius: 5px;
    box-sizing: border-box;
    min-height: 250px;
    min-width: 210px;
    color: ${TEXT_COLOR};
    background-color: white;

    img{
        height: 204px;
        width: 204px;
    }
    &:hover{
     filter:brightness(0.8);
     cursor: pointer;
    }
    
`