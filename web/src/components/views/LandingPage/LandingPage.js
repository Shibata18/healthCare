import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';
import { GoSignIn } from 'react-icons/go';
//import api from '../../../services/api';
function LandingPage() {
    const dNome = localStorage.getItem('Dnome');
    return (
        <>
            <div className="app">
                <span style={{ fontSize: '2rem' }}>Seja Bem vindo ao Chat</span>
                <span style={{ fontSize: '1rem' }}><Link to='/register' >Cadastre-se <FaSignInAlt size={28} color="#E21B46" /> </Link></span>
                <span style={{ fontSize: '1rem' }}><Link to='/login'>Entre <GoSignIn size={28} color="#00BBD3" /></Link></span>
                <span style={{ fontSize: '2rem' }}>Seja Bem vindo ao Chat, {dNome}</span>
            </div>
        </>
    )
}

export default LandingPage
