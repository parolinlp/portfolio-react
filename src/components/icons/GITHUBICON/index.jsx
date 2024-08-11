import styles from './Index.module.css'
import logo from '../../../img/imgCard/icons8-github-100.png'

export default function GitHubCard() {
    return (
        <>
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <img className={styles.imgIcon} src={logo} alt="" />
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