import styles from './Index.module.scss'


export default function MaisSobre() {
    return (
        <section id="sobre" className={styles.secSobre}>
                <div className={styles.conteinerSobre}>
                    <h1 className={styles.tituloSobre}>Sobre Mim</h1>
                    <p className={styles.textParagrafo}>Olá! Meu nome é André Parolin, tenho 21 anos e estou cursando Análise e Desenvolvimento de Sistemas, atualmente no terceiro semestre. Nos últimos sete meses, tenho me dedicado ao estudo do front-end, focando em tecnologias como HTML, CSS e JavaScript, além de frameworks modernos.
                    Meu objetivo é dominar o desenvolvimento front-end e, em breve, expandir meus conhecimentos para back-end e desenvolvimento mobile. Estou interessado em aprender mais sobre linguagens e ferramentas para criar aplicações completas e funcionais.</p>
                </div>
        </section>
    )
}