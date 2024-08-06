import styles from './Index.module.scss'

export default function ReactCard() {
    return (
        <>
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <img className={styles.imgIcon} src="src/img/VectorREACTICON.svg" alt="" />
                <div className={styles.containerText}>
                    <h1 className={styles.h1icon}>REACT</h1>
                    <p className={styles.pIcon}>Estudando</p>
                </div>
            </div>
            <div className={styles.containerAmarelo}></div>
        </div>
        </>
    )
}