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
                    <a href="https://cursos.mfacademy.com.br/login">
                        Entrar
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=+55(61)984288058" target="_blanck" className="btnMatric">Matricule-se</a>
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
