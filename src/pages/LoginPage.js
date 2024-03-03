import { useContext, useEffect, useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { BASE_URL } from "../constants/urls"
import axios from "axios"
import Header from "../components/Header"
import { LoginContext } from "../context/LoginContext"

export default function Login() {
    const navigate = useNavigate()
    const { user, setUser } = useContext(LoginContext);
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    function handleForm(e) {
        e.preventDefault()
        axios.post(`${BASE_URL}/sign-in`, form)
            .then(res => {
                const token = res.data.token;
                const newUser = {
                    token
                }
                setUser(newUser);
                localStorage.setItem("token", token)
                navigate('/')
            })
            .catch(err => {
                alert(err.response.data)
                localStorage.clear();
                navigate('/')
            })
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            const newUser = {
                token: localStorage.getItem('token')
            }
            setUser(newUser)
            navigate('/');
        }
    }, [])

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    return (
        <>
            <Header />
            <Container>
                <h1>Fazer Login</h1>
                <form onSubmit={handleForm}>
                    <input placeholder="E-mail" type="email" name="email" value={form.email} onChange={handleChange} required />
                    <input placeholder="Senha" type="password" name="password" value={form.password} onChange={handleChange} required />
                    <button type="submit">Fazer Login</button>
                </form>
                <Link to={'/register'}>
                    <h2>Criar conta</h2>
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
        margin-top:100px;
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