import CssCard from '../icons/CSSCARD'
import FigmaCard from '../icons/FIGMAICON'
import GitHubCard from '../icons/GITHUBICON'
import GitCard from '../icons/GITICON'
import HtmlCard from '../icons/HTMLCARD'
import JsCard from '../icons/JSCARD'
import ReactCard from '../icons/REACT'
import SassCard from '../icons/SASSICON'
import styles from './Index.module.scss'


export default function Skills() {
    return ( 
        <section id="skills" className={styles.container}>
            <div className={styles.containerText}>
                <h1 className={styles.h1Skills}>Skills</h1>
                <p className={styles.pSkills}>Aqui está os meus conhecimentos até o momento mas logo logo tera mais linguagens </p>
            </div>
            <div className={styles.mainContainerIcons}>
                <div className={styles.containerIcon01}>
                    <HtmlCard />
                    <CssCard />
                    <JsCard />
                    <ReactCard />
                    <GitHubCard />
                    <GitCard />
                    <SassCard />
                </div>
                <div className={styles.containerIcon02}>
                    <FigmaCard />
                </div>
            </div>
        </section>
    )
}