import styled from "styled-components";
import Header from "../components/Header";
import Product from "../components/Product";
import { BACKGROUND_COLOR, DETAIL_COLOR, TEXT_COLOR } from "../constants/colors";
import nipponImg from "../assets/images/nippon.png"
import fowardArrow from "../assets/images/forward_arrow.svg"
import backwardArrow from "../assets/images/backward_arrow.svg"
import { useRef } from "react";

export default function MainPage() {
    const ref = useRef();
    function ScrollToOffset(offset) {
        ref.current.scrollRight += offset;
    }
    return (
        <>
            <Header />
            <MainContainer>
                <Banner src="https://cdn.shopify.com/s/files/1/0595/2526/7508/files/Artboard_2.png" alt="banner" />
                <AreaUtil>
                    <StyledTitle>
                        Os mais pedidos &#x1F3C6;
                    </StyledTitle>
                    <ProductsContainer>
                        <BackwardArrow>
                            <img src={backwardArrow} onClick={()=>ScrollToOffset(-20)} />
                        </BackwardArrow>
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <ForwardArrow>
                            <img src={fowardArrow} onClick={()=>ScrollToOffset(20)} />
                        </ForwardArrow>
                    </ProductsContainer>
                    <StyledTitle>
                        Para os Viciados em Games 🕹️
                    </StyledTitle>
                    <ProductsContainer>
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </ProductsContainer>
                    <StyledTitle>
                        Para os Otakus <img src={nipponImg} alt="nippon" />
                    </StyledTitle>
                    <ProductsContainer>
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </ProductsContainer>
                    <StyledTitle>
                        Para os Amantes de Filmes &#x1F3AC;
                    </StyledTitle>
                    <ProductsContainer>
                        <img src="" />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </ProductsContainer>

                </AreaUtil>
            </MainContainer>
        </>
    );
}

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

const Banner = styled.img`
    width: 100%;
    object-fit: cover;
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
    overflow-x: auto;
    margin-bottom: 20px;
    &::-webkit-scrollbar {
    display: none;
    }
`
const ForwardArrow = styled.div`
    display: flex;
    top: calc(100%/2 - 17px);
    right: 20px;
    position: sticky;
    img{
        width: 35px;
    }
    z-index: 5;
`
const BackwardArrow = styled.div`
    display: flex;
    top: calc(100%/2 - 17px);
    left: 20px;
    position: sticky;
    img{
        width: 35px;
    }
    z-index: 5;
`