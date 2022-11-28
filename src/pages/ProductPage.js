import styled from "styled-components";
import Header from "../components/Header";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { TEXT_COLOR } from "../constants/colors";
import { useParams } from "react-router-dom";

export default function ProductPage() {
    const params = useParams()
    const [product, setProduct] = useState({});
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


    return (
        <>
            <Header />
            <MainContainer>
                <AreaUtil>
                    <ProductContainer>
                        <StyledFrame>
                            <img src={product.image} alt={product.name}></img>
                        </StyledFrame>
                        <h1>{product.name}</h1>
                    </ProductContainer>
                </AreaUtil>
            </MainContainer>
        </>
    );
}

const ProductContainer = styled.div`
    display: flex;
    background-color: cyan;
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
        background-color: red;
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