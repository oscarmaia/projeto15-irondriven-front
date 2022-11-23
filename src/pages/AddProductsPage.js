import { useState } from "react"
import axios from "axios"
import styled from "styled-components"
import { BASE_URL } from "../constants/urls"

export default function AddProducts() {
    const [form, setForm] = useState({
        name: "",
        description: "",
        price: "",
        image: ""
    })

    function handleForm(e) {
        e.preventDefault()
        axios.post(`${BASE_URL}/addProducts`, form)
            .then((res) => {
                console.log("deu boa")
            })
            .catch((err) => {
                alert(err.response.data)
            })
    }

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <Container>
            <h1>Adicione novos produtos:</h1>
            <form onSubmit={handleForm}>
                <input placeholder="Nome do produto" type="text" name="name" value={form.name} onChange={handleChange} required />
                <input placeholder="Descrição do produto" type="text" name="description" value={form.description} onChange={handleChange} required />
                <input placeholder="Preço do produto" type="number" step={0.01} name="price" value={form.price} onChange={handleChange} required />
                <input placeholder="Imagem do produto" type="text" name="image" value={form.image} onChange={handleChange} required />
                <button type="submit">Cadastrar Produtos</button>
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