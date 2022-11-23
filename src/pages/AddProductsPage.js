import { useState } from "react"
import axios from "axios"
import styled from "styled-components"
import {BASE_URL} from "../constants/urls"
export default function AddProducts() {
    const [form, setForm] = useState({
        nameProduct: "",
        description: "",
        price: "",
        imageProduct: ""
    })

    function handleForm(e) {
        e.preventDefault()
        axios.post(`${BASE_URL}`, form)
            .then((res) => {
                console.log("deu boa")
            })
            .catch((err) => {
                console.log("deu ruim")
            })

    }

    return (
        <Container>
            <h1>Adicione novos produtos:</h1>
            <form>
                <input placeholder="Nome do produto" value={form.nameProduct} onChange={e => setForm({ ...form, nameProduct: e.target.value })} required />
                <input placeholder="Descrição do produto" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} required />
                <input placeholder="Preço do produto" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} required />
                <input placeholder="Imagem do produto" value={form.imageProduct} onChange={e => setForm({ ...form, imageProduct: e.target.value })} required />
                <button onClick={handleForm}>Cadastrar Produtos</button>
            </form>
        </Container>
    )
}


const Container = styled.div`
        display:flex;
        flex-direction:column;
        align-items:center;

        form{
            display:flex;
            flex-direction:column;
            align-items:center;
        }

    h1{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        
        color: #FFFFFF;
        margin-top:50px;
        margin-bottom:30px;

    }

    input{
        width: 326px;
        height: 58px; 

        background: #D9D9D9;
        border: 1px solid #000000;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;

        margin-bottom:20px;

        ::placeholder{ 
            padding-left:14px;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            color: #000000;
        }

    }

    button{
        width: 300px;
        height: 58px; 
        border-radius:15px;
        font-size:20px;

        background: #5DA823;
    }

`