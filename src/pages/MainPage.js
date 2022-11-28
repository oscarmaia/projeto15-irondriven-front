import styled from "styled-components";
import Header from "../components/Header";
import Product from "../components/Product";
import { BACKGROUND_COLOR, DETAIL_COLOR, TEXT_COLOR } from "../constants/colors";
import nipponImg from "../assets/images/nippon.png"
import fowardArrow from "../assets/images/forward_arrow.svg"
import backwardArrow from "../assets/images/backward_arrow.svg"
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";


export default function MainPage() {
    const otakusRef = useRef(null)
    const gamesRef = useRef(null)
    const moviesRef = useRef(null)
    const scroll = (scrollOffset, ref) => {
        ref.current.scrollLeft += scrollOffset;
    }
    // const [products, setProducts] = useState([]);
    const [gameProducts, setGameProducts] = useState([]);
    const [otakuProducts, setOtakuProducts] = useState([]);
    const [movieProducts, setMovieProducts] = useState([]);
    useEffect(() => {
        axios.get(`${BASE_URL}/products`)
            .then(res => {
                const arr = res.data;
                const gameArr = []
                const otakuArr = []
                const moviesArr = []
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i].category === "game") {
                        gameArr.push(arr[i]);
                    }
                    if (arr[i].category === "otaku") {
                        otakuArr.push(arr[i]);
                    }
                    if (arr[i].category === "movie") {
                        moviesArr.push(arr[i]);
                    }
                }
                setGameProducts(gameArr);
                setMovieProducts(moviesArr);
                setOtakuProducts(otakuArr);

            })
            .catch(err => {
                alert(err.response.data);
            })
    }, [])


    return (
        <>
            <Header />
            <MainContainer>
                <Banner src="https://cdn.shopify.com/s/files/1/0595/2526/7508/files/Artboard_2.png" alt="banner" />
                <AreaUtil>
                    {/* <StyledTitle>
                        Os mais pedidos &#x1F3C6;
                    </StyledTitle>
                    <ProductsContainer ref={favoritesRef} >
                        <BackwardArrow onClick={() => scroll(-21000, favoritesRef)}>
                            <img src={backwardArrow} />
                        </BackwardArrow>
                        <Product />
                        <ForwardArrow>
                            <img src={fowardArrow} onClick={() => scroll(210, favoritesRef)} />
                        </ForwardArrow>
                    </ProductsContainer> */}
                    <StyledTitle>
                        Para os Viciados em Games 🕹️
                    </StyledTitle>
                    <ProductsContainer ref={gamesRef} >
                        <BackwardArrow onClick={() => scroll(-21000, gamesRef)}>
                            <img src={backwardArrow} />
                        </BackwardArrow>
                        {gameProducts.map((e, i) =>
                            <Product
                                key={e._id}
                                id={e._id}
                                name={e.name}
                                price={e.price}
                                description={e.description}
                                image={e.image}
                            />)}
                        <ForwardArrow>
                            <img src={fowardArrow} onClick={() => scroll(210, gamesRef)} />
                        </ForwardArrow>
                    </ProductsContainer>

                    <StyledTitle>
                        Para os Otakus <img src={nipponImg} alt="nippon" />
                    </StyledTitle>
                    <ProductsContainer ref={otakusRef} >
                        <BackwardArrow onClick={() => scroll(-21000, otakusRef)}>
                            <img src={backwardArrow} />
                        </BackwardArrow>
                        {otakuProducts.map((e, i) =>
                            <Product
                                key={e._id}
                                id={e._id}
                                name={e.name}
                                price={e.price}
                                description={e.description}
                                image={e.image}
                            />)}
                        <ForwardArrow>
                            <img src={fowardArrow} onClick={() => scroll(210, otakusRef)} />
                        </ForwardArrow>
                    </ProductsContainer>

                    <StyledTitle>
                        Para os Amantes de Filmes &#x1F3AC;
                    </StyledTitle>
                    <ProductsContainer ref={moviesRef} >
                        <BackwardArrow onClick={() => scroll(-21000, moviesRef)}>
                            <img src={backwardArrow} />
                        </BackwardArrow>
                        {movieProducts.map((e, i) =>
                            <Product
                                key={e._id}
                                id={e._id}
                                name={e.name}
                                price={e.price}
                                description={e.description}
                                image={e.image}
                            />)}
                        <ForwardArrow>
                            <img src={fowardArrow} onClick={() => scroll(210, moviesRef)} />
                        </ForwardArrow>
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
    min-height:100vh;   
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
    overflow-x: scroll;
    scroll-behavior: smooth;
    margin-bottom: 20px;
    &::-webkit-scrollbar {
        display: none;
    }
`
const ForwardArrow = styled.div`
    display: flex;
    top: calc(100%/2 - 17px);
    right: 0px;
    position: sticky;
    img{
        width: 35px;
    }
    z-index: 5;
`
const BackwardArrow = styled.div`
    display: flex;
    top: calc(100%/2 - 17px);
    left: 0px;
    position: sticky;
    img{
        width: 35px;
    }
    z-index: 5;
`