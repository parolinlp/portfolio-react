import styles from './Index.module.scss'

export default function JsCard() {
    return (
        <>
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <img className={styles.imgIcon} src="src/img/VectorJSICON.svg" alt="" />
                <div className={styles.containerText}>
                    <h1 className={styles.h1icon}>JAVASCRIPT</h1>
                    <p className={styles.pIcon}>Completo</p>
                </div>
            </div>
            <div className={styles.containerAmarelo}></div>
        </div>
        </>
    )
}