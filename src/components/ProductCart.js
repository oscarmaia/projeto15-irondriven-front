import styled from "styled-components"


export default function ProductCart() {
    return (
        <>
            <hr></hr>
            <Produto>
                <Product>
                    <img src="https://cdn.shopify.com/s/files/1/0595/2526/7508/products/H990497ac9ed34162bead5bea38262df9e_1156bf15-2b8c-4fc0-be93-9cd38014fd28.jpg?v=1657412284&width=300" />
                    <h2>Action Boneneco</h2>
                </Product>
                <h2>1</h2>
                <h2>Preço 299,99</h2>
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