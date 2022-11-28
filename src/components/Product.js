import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TEXT_COLOR } from "../constants/colors";

export default function Product({ name, price, image, id }) {
    const navigate = useNavigate()

    function goToProductPage() {
        navigate(`/product/${id}`)
    }

    return (
        <ProductContainer onClick={() => goToProductPage(id)}>
            <StyledFrame>
                <img src={image} alt={name}></img>
            </StyledFrame>
            <h1>{name}</h1>
            <h2>R$ {price}</h2>
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