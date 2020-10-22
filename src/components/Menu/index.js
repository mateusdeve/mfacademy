import React from 'react'
import '../styles/stylesMenu.css'
import logo from '../../assets/images/logo.png'
import menu from '../../assets/images/menu.svg'
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

            <div className="menuGroupMob">
                <img src={logo} className="imgLogomob" alt="Logo"/>
                <button>
                    <img src={menu} className="imgMenuMob"/>
                </button>
            </div>
        </nav>
    )
}

export default Menu
