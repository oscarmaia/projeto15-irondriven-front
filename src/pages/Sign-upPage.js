import styled from "styled-components"
import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Header from "../components/Header"

export default function SignUp() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    })
    const navigate = useNavigate()
    function handleForm(e) {
        e.preventDefault()
        axios.post(`${BASE_URL}/sign-up`, form)
            .then((res) => {
                navigate('/login')
            })
            .catch((err) => {
                alert(err.response.data)
            })
    }

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <>
            <Header />
            <Container>
                <h1>Criar conta</h1>
                <form onSubmit={handleForm} >
                    <input placeholder="Nome" type="text" name="name" value={form.name} onChange={handleChange} required />
                    <input placeholder="E-mail" type="text" name="email" value={form.email} onChange={handleChange} required />
                    <input placeholder="Senha" type="password" name="password" value={form.password} onChange={handleChange} required />
                    <button type="submit">Criar</button>
                </form>
                <Link to={'/login'}>
                    <h2>Já tem uma conta? Entre agora!</h2>
                </Link>
            </Container>
        </>
    )
}


const Container = styled.div`
        display:flex;
        flex-direction:column;
        align-items:center;
        min-height:100vh;

        form{
            display:flex;
            flex-direction:column;
            align-items:center;
        }

    h1{
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        
        color: #FFFFFF;
        margin-top:50px;
        margin-bottom:30px;

    }

    h2{
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 15px;
        line-height: 31px; 
        color:#FFFFFF;

        margin-top:20px;
    }

    input{
        width: 326px;
        height: 58px; 

       /*  background: #0D0A0B; */
        border: 1px solid #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        margin-bottom:20px;

        :hover {
            border:#F25C06 1px solid;
            
            }

        ::placeholder{ 
            padding-left:14px;
            font-family: 'Montserrat', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 23px;
            /* color: #FFFFFF; */
            
        }

    }

    button{
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        color: #FFFFFF;
        font-size: 15px;

        width: 300px;
        height: 58px; 
        border-radius:5px;

        background: #F25C05;

        cursor: pointer;

        :hover {
            width: 305px;
            height: 60px; 
            
            }
    }

`