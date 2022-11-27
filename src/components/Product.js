import styled from "styled-components";
import { TEXT_COLOR } from "../constants/colors";

export default function Product() {
    return (
        <StyledFrame>
            <img src="https://cdn.awsli.com.br/1000x1000/138/138431/produto/89739734/263291ac75.jpg" alt="luffy"></img>
            <h1>QUALQUER NOME</h1>
        </StyledFrame>
    )
}

const StyledFrame = styled.div`
    display: flex;
    position: relative;
    border: solid white;
    border-radius: 5px;
    box-sizing: border-box;
    margin-right: 20px;
    min-height: 250px;
    min-width: 210px;
    color: ${TEXT_COLOR};
    h1{
        font-weight: 700;
        position: absolute;
        top: 0px;
        color: black;
    }
    img{
        width: 100%;
    }
    &:hover{
     filter:brightness(0.8);
     cursor: pointer;
    }
    
`