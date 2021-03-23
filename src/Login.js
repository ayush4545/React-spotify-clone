import React, { useEffect ,useState} from 'react'
import './login.css'
import {loginUrl} from './spotify';
function Login() {
    
    return (
        <div className='login'>
            <img src="https://imgix.bustle.com/uploads/image/2018/10/5/32a337c4-a6e9-4c0e-b512-010bb98e0049-spotify-logo.png?w=1020&h=574&fit=crop&crop=faces&auto=format%2Ccompress" alt="spotify logo" />
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
