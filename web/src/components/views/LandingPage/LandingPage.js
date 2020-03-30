import React from 'react'
import { Link} from 'react-router-dom'
import {FaSignInAlt} from 'react-icons/fa'
import {GoSignIn} from 'react-icons/go'

function LandingPage() {
    return (
        <>
        <div className="app">
            <span style={{ fontSize: '2rem' }}>Seja Bem vindo ao Chat</span>
            <span style={{ fontSize: '1rem' }}><Link to='/register' >Cadastre-se <FaSignInAlt size={28} color="#E21B46" /> </Link></span>
            <span style={{ fontSize: '1rem' }}><Link to='/login'>Entre <GoSignIn size={28} color="#00BBD3" /></Link></span>
        </div>
        </>
    )
}

export default LandingPage
