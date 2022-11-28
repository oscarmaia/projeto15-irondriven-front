import styled from "styled-components"


export default function ProductCart({id,name,price,image}) {
    return (
        <>
            <hr></hr>
            <Produto>
                <Product>
                    <img src={image}/>
                    <h2>{name}</h2>
                </Product>
                <h2>1</h2>
                <h2>Preço {price}</h2>
            </Produto>
        </>
    )
}

const Produto = styled.div`
     display:flex;
    justify-content:space-around;

    margin-left:20px;
    margin-right:20px;

`

const Product = styled.div`
    display:flex;
    flex-direction:column;
    h2{
        margin-top:10px;
    }

`