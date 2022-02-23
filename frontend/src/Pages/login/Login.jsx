import React, { useState, useContext } from 'react'
import './login.css'
import { LoginComponent } from '../../Components/login/LoginComponent'
import { RegisterComponent } from '../../Components/register/RegisterComponent'
import {AppContext} from '../../Context/AppContext'

export const Login = () => {
  const {setRegister, register} = useContext(AppContext)
  return (
    <div className='login-page'>
         {register ? <RegisterComponent />:<LoginComponent />}
         
    </div>
  )
}
