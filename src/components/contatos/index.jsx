import styles from './Index.module.css'



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
                    <a href="https://mail.google.com" target='_Blank'><img src="src\img\imgContatos\gmail.svg" alt="" /></a>
                    <a href="https://wa.me/5511960411261" target='_Blank'><img src="src\img\imgContatos\whats.svg" alt="" /></a>
                    <a href="https://github.com/parolinlp" target='_Blank'><img src="src\img\imgContatos\github.svg" alt="" /></a>
                    <a href="https://www.linkedin.com/in/andr%C3%A9-parolin-271601223/" target='_Blank'><img src="src\img\imgContatos\linkedin.svg" alt="" /></a>
                </div>
            </div>


        </section>
    )
}