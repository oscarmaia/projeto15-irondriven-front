import styled from "styled-components";
import Header from "../components/Header";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { DETAIL_COLOR, TEXT_COLOR } from "../constants/colors";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";

export default function ProductPage() {
    const params = useParams()
    const [product, setProduct] = useState({});
    const navigate = useNavigate()
    useEffect(() => {
        const { id } = params;
        axios.get(`${BASE_URL}/product/${id}`)
            .then(res => {
                setProduct(res.data)
            })
            .catch(err => {
                alert(err.response.data);
            })
    }, [])

    function addItemToCart() {
        const config = {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          };
        axios.post(`${BASE_URL}/addToCart`,product,config)
        .then(res=>{
            navigate('/')
        })
        .catch(err=>{
            alert(err.response.data)
        })
    }
    return (
        <>
            <Header />
            <MainContainer>
                <AreaUtil>
                    <ProductContainer>
                        <StyledFrame>
                            <img src={product.image} alt={product.name}></img>
                        </StyledFrame>
                        <InfoContainer>
                            <h1>{product.name}</h1>
                            <h2>{product.description}</h2>
                            <PriceArea><h1>R$ {product.price}</h1></PriceArea>
                        </InfoContainer>
                    </ProductContainer>
                    <StyledButton onClick={addItemToCart}>ADD TO CART</StyledButton>
                </AreaUtil>
            </MainContainer>
        </>
    );
}

const StyledButton = styled.button`
    background-color: ${DETAIL_COLOR};
`
const PriceArea = styled.div`
    position:absolute;
    bottom: 0px;
    left: 0px;
    padding:0px 10px;
    h1{
        font-weight: 700;
        color: ${DETAIL_COLOR};
    }
`
const InfoContainer = styled.div`
    position: relative;
    padding:0px 10px;
    h1{
        font-weight: 700;
        font-size: 32px;
    }
    h2{
        margin-top: 10px;
        font-weight: 400;
        font-size: 20px;
        color:white;
    }
`

const ProductContainer = styled.div`
    display: flex;
        h1{
            color:${TEXT_COLOR}
        }
`

const MainContainer = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;    
    align-items: center;
    flex-direction: column;
`

const AreaUtil = styled.div`
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        width: 70%;
        @media all and (max-width: 500px){
            width: 90%;
        }
`

const StyledTitle = styled.h1`
    display: flex;
    padding: 20px 0px;
    color: ${TEXT_COLOR};
    font-weight: 700;
    font-size: 28px;
    overflow-x: hidden;
    img{
        width: 30px;
        margin-left: 10px;
    }
`

const ProductsContainer = styled.div`
    position: relative  ;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    box-sizing: border-box;
    overflow-x: scroll;
    scroll-behavior: smooth;
    margin-bottom: 20px;
    &::-webkit-scrollbar {
        display: none;
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
    min-height: 350px;
    min-width: 310px;
    color: ${TEXT_COLOR};
    background-color: white;

    img{
        height: 345px;
        width: 305px;
    }

    &:hover{
     filter:brightness(0.8);
     cursor: pointer;
    }
    
`