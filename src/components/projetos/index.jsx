import styles from './Index.module.css'
import Css from '../tags/CSS/index'
import Html from '../tags/HTML/index'
import Js from '../tags/JS/index'
import React from '../tags/REACT/index'
import Sass from '../tags/SCSS/index'
import Figma from '../tags/FIGMA/index'
import GitHub from '../tags/GITHUB/index'


export default function Projetos() {


    return ( 
        <section id="projetos" className={styles.container}>
            <div className={styles.containerText}>
                    <h1 className={styles.h1Skills}>Projetos</h1>
            </div>

            <div className={styles.containerRolagem}>


                
                <div className={styles.Projeto01}>
                    <div className={styles.imgContainer01}>
                        
                    </div>
                    <div className={styles.containerTexts}>
                        <div className={styles.mainTexts}>
                            <h1 className={styles.h1ContainerProjeto}>Pizzamania</h1>
                            <p className={styles.pContainerProjeto}>Pizzamania foi o meu primeiro projeto desenvolvido completamente com React. É um site básico de uma pizzaria, sem lógica de programação complexa.</p>
                        </div>
                        <div className={styles.containerIcons}>
                            <React />
                            <Css />
                            <Figma />
                            <GitHub />
                        </div>
                        <div className={styles.bnt}>
                            <button className={styles.buttonsSobre}><a href="https://pizzamania-pa.vercel.app/" target="_blank" rel="noopener noreferrer">Ver mais</a></button>
                            <button className={styles.buttonsSobre}>Git Hub</button>
                        </div>
                    </div>
                </div>

                <div className={styles.Projeto02}>
                    <div className={styles.imgContainer02}>
                        
                    </div>
                    <div className={styles.containerTexts}>
                        <div className={styles.mainTexts}>
                            <h1 className={styles.h1ContainerProjeto}>Calculadora de IMC</h1>
                            <p className={styles.pContainerProjeto}>Este foi meu primeiro projeto usando JavaScript, HTML e CSS. É uma calculadora de IMC que permite aos usuários calcular seu IMC e obter uma avaliação rápida de saúde. O site é simples e intuitivo.</p>
                        </div>
                        <div className={styles.containerIcons}>
                            <Css />
                            <Html />
                            <Js />
                            <Figma />
                            <GitHub />
                        </div>
                        <div className={styles.bnt}>
                            <button className={styles.buttonsSobre}><a href="https://neon-cajeta-7fc028.netlify.app/" target="_blank" rel="noopener noreferrer">Ver Mais</a></button>
                            <button className={styles.buttonsSobre}>Git Hub</button>
                        </div>
                    </div>
                </div>

                <div className={styles.Projeto03}>
                    <div className={styles.imgContainer03}>
                        
                    </div>
                    <div className={styles.containerTexts}>
                        <div className={styles.mainTexts}>
                            <h1 className={styles.h1ContainerProjeto}>TO DO LIST</h1>
                            <p className={styles.pContainerProjeto}>Este projeto é uma lista de tarefas (Todo List) desenvolvida com JavaScript, HTML e CSS. Foi meu segundo projeto aplicando lógica de programação.</p>
                        </div>
                        <div className={styles.containerIcons}>
                            <Css />
                            <Html />
                            <Js />
                            <Figma />
                            <GitHub />
                        </div>
                        <div className={styles.bnt}>
                            <button className={styles.buttonsSobre}><a href="https://graceful-duckanoo-a9f6f7.netlify.app/" target="_blank" rel="noopener noreferrer">Ver Mais</a></button>
                            <button className={styles.buttonsSobre}>Git Hub</button>
                        </div>
                    </div>
                </div>

                <div className={styles.Projeto04}>
                    <div className={styles.imgContainer04}>
                        
                    </div>
                    <div className={styles.containerTexts}>
                        <div className={styles.mainTexts}>
                            <h1 className={styles.h1ContainerProjeto}>Portfólio</h1>
                            <p className={styles.pContainerProjeto}>Este é meu primeiro portfólio. Optei por criar este novo porque não estava satisfeito com o design do anterior e queria utilizar React para aprimorar meus conhecimentos.</p>
                        </div>
                        <div className={styles.containerIcons}>
                            <Css />
                            <Html />
                            <Js />
                            <Figma />
                            <GitHub />
                        </div>
                        <div className={styles.bnt}>
                            <button className={styles.buttonsSobre}><a href="https://astonishing-rugelach-f9fb1d.netlify.app/" target="_blank" rel="noopener noreferrer">Ver Mais</a></button>
                            <button className={styles.buttonsSobre}>Git Hub</button>
                        </div>
                    </div>
                </div>

                <div className={styles.Projeto05}>
                    <div className={styles.imgContainer05}>
                        <img className={styles.imgProjetos} src="" alt="" />
                    </div>
                    <div className={styles.containerTexts}>
                        <div className={styles.mainTexts}>
                            <h1 className={styles.h1ContainerProjeto}>Relógio Digital</h1>
                            <p className={styles.pContainerProjeto}>Um relógio digital simples feito com HTML, CSS e JavaScript. Exibe a hora atual e atualiza a cada segundo, demonstrando de forma prática o uso dessas tecnologias.</p>
                        </div>
                        <div className={styles.containerIcons}>
                            <Css />
                            <Html />
                            <Js />
                            <Figma />
                            <GitHub />
                        </div>
                        <div className={styles.bnt}>
                            <button className={styles.buttonsSobre}><a href="https://imaginative-dasik-8d7174.netlify.app/" target="_blank" rel="noopener noreferrer">Ver mais</a></button>
                            <button className={styles.buttonsSobre}>Git Hub</button>
                        </div>
                    </div>
                </div>

                <div className={styles.Projeto06}>
                    <div className={styles.imgContainer06}>
                        <img className={styles.imgProjetos} src="" alt="" />
                    </div>
                    <div className={styles.containerTexts}>
                        <div className={styles.mainTexts}>
                            <h1 className={styles.h1ContainerProjeto}>Tela de Login</h1>
                            <p className={styles.pContainerProjeto}>Este é um projeto básico criado apenas com HTML e CSS. Foi o meu primeiro projeto, onde explorei os fundamentos dessas tecnologias para construir uma página web simples e funcional.</p>
                        </div>
                        <div className={styles.containerIcons}>
                            <Css />
                            <Html />
                            <GitHub />
                        </div>
                        <div className={styles.bnt}>
                            <button className={styles.buttonsSobre}><a href="https://stellar-liger-c19422.netlify.app/" target="_blank" rel="noopener noreferrer">Ver mais</a></button>
                            <button className={styles.buttonsSobre}>Git Hub</button>
                        </div>
                    </div>
                </div>

                <div className={styles.Projeto07}>
                    <div className={styles.imgContainer07}>
                        <img className={styles.imgProjetos} src="" alt="" />
                    </div>
                    <div className={styles.containerTexts}>
                        <div className={styles.mainTexts}>
                            <h1 className={styles.h1ContainerProjeto}>Formulario </h1>
                            <p className={styles.pContainerProjeto}>Este é um projeto básico criado apenas com HTML e CSS.</p>
                        </div>
                        <div className={styles.containerIcons}>
                            <Css />
                            <Html />
                            <GitHub />
                        </div>
                        <div className={styles.bnt}>
                            <button className={styles.buttonsSobre}><a href="https://66985c6287626605e2966921--comforting-strudel-214b7e.netlify.app/" target="_blank" rel="noopener noreferrer">Ver mais</a></button>
                            <button className={styles.buttonsSobre}>Git Hub</button>
                        </div>
                    </div>
                </div>
                



            </div>
        </section>
    )
}