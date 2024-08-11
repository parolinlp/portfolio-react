import styles from './Index.module.css'
import logo from '../../../img/imgCard/icons8-javascript-100.png'

export default function JsCard() {
    return (
        <>
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <img className={styles.imgIcon} src={logo} alt="" />
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