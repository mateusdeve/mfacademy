import React from 'react'
import '../styles/stylesMenu.css'
import logo from '../../assets/images/logo.png'
const Menu = () => {
    return (
        <nav id="menu">
            <div className="menuGroup">
                <img src={logo} alt="Logo"/>
                <div className="button">
                    <a href="https://mfacademy.com.br/login">
                        Entrar
                    </a>
                    <button>Matricule-se</button>
                </div>
            </div>
        </nav>
    )
}

export default Menu
