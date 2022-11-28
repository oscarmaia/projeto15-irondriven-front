import { Link } from "react-router-dom"
import styled from "styled-components"
import cartImage from "../assets/images/cart.svg"
import menuImage from "../assets/images/menu.svg"
import { BACKGROUND_COLOR, DETAIL_COLOR, TEXT_COLOR } from "../constants/colors"

export default function Footer() {
    return (
        <FooterContainer>
            <AreaUtil>
                <h1>FOOTER INFOS</h1>
            </AreaUtil>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    width: 100%;
    height: 200px;
    background-color: ${DETAIL_COLOR};
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0px;
    margin: auto;
    `
const AreaUtil = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70%;
        @media all and (max-width: 500px){
            width: 90%;
        }
        a{
    text-decoration:none;
}
        `
