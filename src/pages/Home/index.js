import React from 'react'
import '../styles/stylesHome.css'
import logo from '../../assets/images/logo.png'

import Menu from '../../components/Menu'

const Home = () => {
    return (
        <>
        <div>
            <section className="apresentacao">
                <Menu />
                <div className="apresentacaoText">
                    <h1>Formação Ministerial</h1>
                    <p>Você vai estudar, praticar, discutir e se aprofundar <br />em uma plataforma que respira tecnologia.</p>
                    <button>Saiba mais</button>
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
                            <button>Matricule-se</button>
                        </div>
                    </div>

                    <div className="especifico">
                        <div className="conteudoCurso">
                            <p className="subTitle">Online</p>
                            <h1>Treinamento de voluntários e consolidados! </h1>
                            <p className="body">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat.</p>
                            <button>Matricule-se</button>
                        </div>
                        <div className="imgCurso"></div>
                    </div>
            </section>
            <section className="professores">
                <div className="titulo">
                    <h1>Professores</h1>
                </div>
                <div className="conteudo">
                    <div className="card">
                        <div className="professor"></div>
                        <p className="funcao">Apostolo</p>
                        <p className="nome">Fad Faraj</p>
                    </div>
                    <div className="card">
                        <div className="professor"></div>
                        <p className="funcao">Apostolo</p>
                        <p className="nome">Fad Faraj</p>
                    </div>
                    <div className="card mlplus">
                        <div className="professor"></div>
                        <p className="funcao">Apostolo</p>
                        <p className="nome">Fad Faraj</p>
                    </div>
                </div>
                <div className="conteudo mtplus">
                    <div className="card">
                        <div className="professor"></div>
                        <p className="funcao">Apostolo</p>
                        <p className="nome">Fad Faraj</p>
                    </div>
                    <div className="card">
                        <div className="professor"></div>
                        <p className="funcao">Apostolo</p>
                        <p className="nome">Fad Faraj</p>
                    </div>
                    <div className="card mlplus">
                        <div className="professor"></div>
                        <p className="funcao">Apostolo</p>
                        <p className="nome">Fad Faraj</p>
                    </div>
                </div>
            </section>
            <footer>
                <div className="social">
                    <div>
                        <img src={logo} alt=""/>
                        <p className="textBody">Você vai estudar, praticar, discutir e se aprofundar em uma plataforma que respira tecnologia.</p>
                    </div>
                    <div className="groupText">
                        <p className="tituloFooter">Titulo</p>
                        <p className="subTituloFooter">Titulo</p>
                        <p className="subTituloFooter">Titulo</p>
                        <p className="subTituloFooter">Titulo</p>
                    </div>
                    <div className="groupText">
                        <p className="tituloFooter">Contato</p>
                        <p className="subTituloFooter">Titulo</p>
                        <p className="subTituloFooter">Titulo</p>
                        <p className="subTituloFooter">Titulo</p>
                    </div>
                </div>
            </footer>
        </div>
        </>
    )
}

export default Home
