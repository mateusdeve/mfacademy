import React from 'react'
import '../styles/stylesHome.css'
import logo from '../../assets/images/logo.png'

import Menu from '../../components/Menu'

const Home = () => {
    return (
        <>
        <div>
            <Menu />
            <section className="apresentacao">
                <div className="apresentacaoText">
                    <h1>Formação Ministerial</h1>
                    <p>Você vai estudar, praticar, discutir e se aprofundar em uma plataforma que respira o evangelho.</p>
                    {/* <button>Saiba mais</button> */}
                </div>
            </section>
            <section className="cursos">
                <div className="titulo">
                    <h1>Cursos</h1>
                </div>
                    <div className="especifico">
                        <div className="imgCurso"></div>
                        <div className="conteudoCurso">
                            <p className="subTitle">Online</p>
                            <h1>Treinamento de voluntários e consolidados! </h1>
                            <p className="body">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat.</p>
                                <a href="https://api.whatsapp.com/send?phone=+55(61)981357453" target="_blanck" className="btnMatric">Matricule-se</a>
                        </div>
                    </div>
            </section>
            <footer className="web">
                <div className="social">
                    <div>
                        <img src={logo} alt=""/>
                        <p className="textBody">Você vai estudar, praticar, discutir e se aprofundar em uma plataforma que respira o evangelho.</p>
                    </div>
                    <div className="groupText">
                        <p className="tituloFooter">Contato</p>
                        <a href="https://api.whatsapp.com/send?phone=+55(61)981357453" target="_blanck" className="subTituloFooter"><strong>Tel:</strong> (61) 9 8428-8058</a>
                        <a href="mailto:tferreiralopes@gmail.com" target="_blanck" className="subTituloFooter"><strong>Email:</strong>  tferreiralopes@gmail.com</a>
                    </div>
                </div>
            </footer>
            <footer className="mobile">
                    <div className="mobileimg">
                        <img src={logo} alt=""/>    
                    </div>
                    <p>Você vai estudar, praticar, discutir e se aprofundar em uma plataforma que respira o evangelho.</p>
            </footer>
        </div>
        </>
    )
}

export default Home
