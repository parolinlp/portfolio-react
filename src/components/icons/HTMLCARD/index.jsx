import styles from './Index.module.scss'

export default function HtmlCard() {
    return (
        <>
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <img className={styles.imgIcon} src="src/img/VectorHTMLICON.svg" alt="" />
                <div className={styles.containerText}>
                    <h1 className={styles.h1icon}>HTML</h1>
                    <p className={styles.pIcon}>Completo</p>
                </div>
            </div>
            <div className={styles.containerAmarelo}></div>
        </div>
        </>
    )
}