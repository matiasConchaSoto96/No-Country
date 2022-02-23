import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {AppContext} from '../../Context/AppContext'
import useForm from '../../Hooks/useForm'

export const RegisterComponent = () => {
    const {user, setUser, setRegister} = useContext(AppContext)
    const [form, handleChange] = useForm({ email: "", password: "", name: "", lastname: "", passwordConfirm: "" })
    const { email, password } = form;
    const [users, setUsers] = useState([])

    useEffect(()=>{
        if(users.length){
            users.forEach(u => {
                if(u.email === user.email && u.pass === user.password ) {
                    setUser({...user, logged: true})
                }
            })
        }
    }, [users, user])

    const getData = async () => {
        try {
            const res = await fetch("http://localhost:3001/user")
            const data = await res.json()
            const set = await setUsers(data.data)
        } catch (err) {
            console.log(err);
        }
    } 
    
    const handleSubmit = (e) => {
        e.preventDefault(form)
        setUser(form)
        getData()        
    }

    const handlerForm = () => {
        setRegister(false)
    }

  return (
    <div className='login-page_box'>
            <div className='login-page_form'>
                <form onSubmit={handleSubmit}>
                <p>
                        <label htmlFor="Nombre">Nombre</label>
                        <input id="name" 
                        name="name"
                        /*value={name}*/
                        onChange={handleChange}
                        placeholder='Nombre'></input>
                    </p>
                    <p>
                        <label htmlFor="Apellido">Apellido</label>
                        <input id="lastname" 
                        name="lastname"
                        /*value={lastname}*/
                        onChange={handleChange}
                        placeholder='Apellido'></input>
                    </p>
                    <p>
                        <label htmlFor="email">Email</label>
                        <input id="email" 
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder='Email'></input>
                    </p>
                    <p>
                        <label htmlFor="contraseña">Contraseña</label>
                        <input id="contraseña" 
                        name="password"
                        value={password}
                        onChange={handleChange}
                        placeholder='Contraseña'></input>
                    </p>
                    <p>
                        <label htmlFor="contraseñaConf">Confirmar contraseña</label>
                        <input id="contraseñaConf" 
                        name="passwordConfirm"
                        /*value={passwordConfirm}*/
                        onChange={handleChange}
                        placeholder='Confirmar contraseña'></input>
                    </p>
                    <p>
                        <button type='submit'>Registrarse</button>
                    </p>
                    <p>
                        <span>Ya tienes una cuenta? <button onClick = {handlerForm} >Inicia sesión</button></span>
                    </p>
                </form>
            </div>
        </div>
  )
}
