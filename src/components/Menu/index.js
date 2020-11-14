import React from 'react'
import '../styles/stylesMenu.css'
import logo from '../../assets/images/logo.png'
import menu from '../../assets/images/menu.svg'
import iconClose from '../../assets/images/close.svg'

const Menu = () => {
    const menuMob = React.useRef(null);
    function handleMenu() {
        menuMob.current.className = 'menuMobActive';
        console.log(menuMob.current);
    }

    function handleCloseMenu() {
        menuMob.current.className = 'menuMob';
        console.log(menuMob.current);
    }
    return (
        <>
        <div ref={menuMob} className="menuMob">
            <button onClick={handleCloseMenu}>
                <img src={iconClose} alt=""/>
            </button>
            <div className="groupBtnMob">
                <a href="https://cursos.mfacademy.com.br/login" className="btnEntrarMob" >
                    Entrar
                </a>
                <a href="https://api.whatsapp.com/send?phone=+55(61)981357453)" target="_blanck" className="btnMatricMob">
                    Matricule-se
                </a>
            </div>
        </div>
        <nav id="menu">
            <div className="menuGroup">
                <img src={logo} alt="Logo"/>
                <div className="button">
                    <a href="https://cursos.mfacademy.com.br/login" >
                        Entrar
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=+55(61)981357453)" target="_blanck" className="btnMatric">Matricule-se</a>
                </div>
            </div>

            <div className="menuGroupMob">
                <img src={logo} className="imgLogomob" alt="Logo"/>
                <button onClick={handleMenu}>
                    <img src={menu} className="imgMenuMob" alt="menu"/>
                </button>
            </div>
        </nav>
        </>
    )
}

export default Menu
