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
                    <h1>Formação Ministerial - Online</h1>
                    <p>Você vai estudar, praticar, discutir e se aprofundar no evangelho do Senhor em uma
plataforma de alta tecnologia.</p>
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
                            <p className="body">Venha conhecer mais sobre a visão
                                do Ministério da Fé, além de
                                princípios de autoridade espiritual,
                                disciplina e vocação que irão ajudar
                                você a servir com excelência e
                                leveza na casa do Senhor!
                            </p>
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
                        <a href="https://api.whatsapp.com/send?phone=+55(61)981357453" target="_blanck" className="subTituloFooter"><strong>Tel:</strong> (61) 9 8135-7453</a>
                        <a href="mailto: atendimento@mfacademy.com.br" target="_blanck" className="subTituloFooter"><strong>Email:</strong>   atendimento@mfacademy.com.br</a>
                    </div>
                </div>
            </footer>
            <footer className="mobile">
                    <div className="mobileimg">
                        <img src={logo} alt=""/>    
                    </div>
                    <p>Você vai estudar, praticar, discutir e se aprofundar em uma plataforma que respira o evangelho.</p>
                    <div className="footerGroup">
                        <p>Contato</p>
                        <a href="https://api.whatsapp.com/send?phone=+55(61)981357453" target="_blanck" className="subTituloFooter"><strong>Tel:</strong> (61) 9 8135-7453</a>
                        <a href="mailto: atendimento@mfacademy.com.br" target="_blanck" className="subTituloFooter"><strong>Email:</strong>   atendimento@mfacademy.com.br</a>
                    </div>
            </footer>
        </div>
        </>
    )
}

export default Home
