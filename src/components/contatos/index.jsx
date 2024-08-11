import styles from './Index.module.css'
import logoGit from '../../img/imgCard/icons8-github-100.png'
import logoWha from '../../img/imgCard/icons8-whatsapp-100.png'
import logoLink from '../../img/imgCard/icons8-linkedin-100.png'
import logoGmail from '../../img/imgCard/icons8-gmail-100.png'

export default function Contato() {
    return ( 
        <section id="contato" className={styles.container}>
            <h1 className={styles.h1MAin}>Contatos</h1>


            <div className={styles.mainContainer}>

                <div className={styles.containerContact}>
                    <div>
                        <h1>EMAIL:</h1>
                        <p>andreluisparolin14@gmail.com</p>
                    </div>
                    <div>
                        <h1>WHATSAPP:</h1>
                        <p>(11)96041-1261</p>
                    </div>
                    <div>
                        <h1>GITHUB:</h1>
                        <p>parolinlp</p>
                    </div>
                    <div>
                        <h1>LINKEDIN:</h1>
                        <p>André Parolin</p>
                    </div>
                </div>


                <div className={styles.containerLinks}>
                    <a href="https://mail.google.com" target='_Blank'><img src={logoGmail} alt="" /></a>
                    <a href="https://wa.me/5511960411261" target='_Blank'><img src={logoWha} alt="" /></a>
                    <a href="https://github.com/parolinlp" target='_Blank'><img src={logoGit} alt="" /></a>
                    <a href="https://www.linkedin.com/in/andr%C3%A9-parolin-271601223/" target='_Blank'><img src={logoLink} alt="" /></a>
                </div>
            </div>


        </section>
    )
}