import styles from './Index.module.css'

export default function GitHubCard() {
    return (
        <>
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <img className={styles.imgIcon} src="src/img/VectorGITHUBICON.svg" alt="" />
                <div className={styles.containerText}>
                    <h1 className={styles.h1icon}>GITHUB</h1>
                    <p className={styles.pIcon}>Completo</p>
                </div>
            </div>
            <div className={styles.containerAmarelo}></div>
        </div>
        </>
    )
}