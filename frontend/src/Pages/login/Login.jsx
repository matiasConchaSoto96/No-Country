import React, { useState } from 'react'
import './login.css'
import { LoginComponent } from '../../Components/login/LoginComponent'

export const Login = () => {
    
  return (
    <div className='login-page'>
        { registro ?
         <></>
         : 
         <LoginComponent />
        }
    </div>
  )
}
