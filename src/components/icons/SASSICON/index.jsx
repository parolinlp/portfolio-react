import styles from './Index.module.css'
import logo from '../../../img/imgCard/icons8-sass-100.png'

export default function SassCard() {
    return (
        <>
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <img className={styles.imgIcon} src={logo} alt="" />
                <div className={styles.containerText}>
                    <h1 className={styles.h1icon}>SASS</h1>
                    <p className={styles.pIcon}>Completo</p>
                </div>
            </div>
            <div className={styles.containerAmarelo}></div>
        </div>
        </>
    )
}