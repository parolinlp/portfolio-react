import styles from './Index.module.css'
import logo from '../../../img/imgCard/icons8-react-120.png'

export default function ReactCard() {
    return (
        <>
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <img className={styles.imgIcon} src={logo} alt="" />
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