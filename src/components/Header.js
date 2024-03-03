import { Link } from "react-router-dom"
import styled from "styled-components"
import cartImage from "../assets/images/cart.svg"
import menuImage from "../assets/images/menu.svg"
import { BACKGROUND_COLOR, DETAIL_COLOR, TEXT_COLOR } from "../constants/colors"

export default function Header() {
    return (
        <HeaderContainer>
            <AreaUtil>
                <Menu>
                    <img src={menuImage} alt="menu"></img>
                </Menu>

                <LeftArea>
                    <Link to={'/'}>
                        <Logo>
                            <h1>iron<span>driven</span></h1>
                        </Logo>
                    </Link>
                </LeftArea>
                <CenterArea>
                    <Collection>
                        <span>Animes</span>
                    </Collection>
                    <Collection>
                        <span>Games</span>
                    </Collection>
                    <Collection>
                        <span>Filmes</span>
                    </Collection>
                </CenterArea>
                <RightArea>
                    <Link to={'/login'}>
                        <UserContainer>
                            <h1>?</h1>
                        </UserContainer>
                    </Link>
                    <Link to={'/cart'}>
                        <img src={cartImage} alt="cart"></img>
                    </Link>
                </RightArea>
            </AreaUtil>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;    
    align-items: center;
    
    width: 100%;
    height: 60px;
    background-color: ${DETAIL_COLOR};
    `
const AreaUtil = styled.div`
        display: flex;
        justify-content: space-between;
        width: 70%;
        @media all and (max-width: 500px){
            width: 90%;
        }
        a{
    text-decoration:none;
}
        `
const LeftArea = styled.div`
display: flex;
align-items: center;
`
const CenterArea = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
padding:0px 10px;
width: 100%;
@media all and (max-width: 500px){
        display: none;
        }
`
const Collection = styled.div`
    padding: 0px 5px;
    span{
        font-weight: 400;
        color: ${TEXT_COLOR};
        justify-content: space-between;
        box-sizing: border-box;
        cursor: pointer;
        :hover{
            filter: brightness(0.8);
        }
    }
`
const RightArea = styled.div`
box-sizing: border-box;
display: flex;
justify-content: flex-end;
width: 100px;
img{
    width: 25px;
    margin-left: 5px;
    cursor: pointer;
}
`
const Logo = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    span{
        color: ${BACKGROUND_COLOR};
    }
    h1{
        color:${TEXT_COLOR};
        font-weight: 700;
        font-size: larger;
    }
`
const Menu = styled.div`
    display: none;
    cursor: pointer;
    @media (max-width: 500px) {

        display: flex;
        width: 100px;
        align-items: center;
        img{
            width: 30px;
            :hover{
            filter: brightness(0.8);
        }
        }
    }
`
const UserContainer = styled.div`
    box-sizing: border-box;
    width: 35px;
    height: 35px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${BACKGROUND_COLOR};
    h1{
        font-weight: 700;
        font-size: 20px;
        color: ${TEXT_COLOR};
    }
    :hover{
            filter: brightness(0.8);
        }
    
`