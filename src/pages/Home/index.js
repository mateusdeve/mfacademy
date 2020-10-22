import React from 'react'
import '../styles/stylesHome.css'
import logo from '../../assets/images/logo.png'
import Grid from '@material-ui/core/Grid';

import Menu from '../../components/Menu'

const Home = () => {
    return (
        <>
        <div>
            <Menu />
            <section className="apresentacao">
                <div className="apresentacaoText">
                    <h1>Formação Ministerial</h1>
                    <p>Você vai estudar, praticar, discutir e se aprofundar em uma plataforma que respira tecnologia.</p>
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
            </section>
            <section className="professores">
                <div className="titulo">
                    <h1>Professores</h1>
                </div>
                <Grid
                container
                direction="row"
                className="conteudo">
                    <Grid item xs={8} sm={3} className="card">
                        <div className="professor"></div>
                        <p className="funcao">Pastor</p>
                        <p className="nome">John Faraj</p>
                    </Grid>
                    <Grid item xs={8} sm={3} className="card">
                        <div className="professor"></div>
                        <p className="funcao">Pastor</p>
                        <p className="nome">John Faraj</p>
                    </Grid>
                    <Grid item xs={8} sm={3} className="card">
                        <div className="professor"></div>
                        <p className="funcao">Pastor</p>
                        <p className="nome">John Faraj</p>
                    </Grid>
                    <Grid item xs={12} className="mob-none"></Grid>
                    <Grid item xs={8} sm={3} className="card mt-card-divid">
                        <div className="professor"></div>
                        <p className="funcao">Pastor</p>
                        <p className="nome">John Faraj</p>
                    </Grid>
                    <Grid item xs={8} sm={3} className="card mt-card-divid">
                        <div className="professor"></div>
                        <p className="funcao">Pastor</p>
                        <p className="nome">John Faraj</p>
                    </Grid>
                    <Grid item xs={8} sm={3} className="card mt-card-divid">
                        <div className="professor"></div>
                        <p className="funcao">Pastor</p>
                        <p className="nome">John Faraj</p>
                    </Grid>
                </Grid>
            </section>
            <footer className="web">
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
            <footer className="mobile">
                <div>
                    <div className="mobileimg">
                        <img src={logo} alt=""/>    
                    </div>
                    <p>Você vai estudar, praticar, discutir e se aprofundar em uma plataforma que respira tecnologia.</p>
                </div>
            </footer>
        </div>
        </>
    )
}

export default Home
